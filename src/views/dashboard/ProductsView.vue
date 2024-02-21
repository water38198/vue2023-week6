<script setup>
import Swal from 'sweetalert2'
import axios from 'axios';
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import ProductModal from '@/components/front/ProductModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
const { VITE_URL, VITE_PATH } = import.meta.env;
const router = useRouter();
const products = ref([]);
const dialog = ref();
const tempProduct = ref({});
const isNew = ref(true);
const pagination = ref({});
function checkAdmin() {
    // 取出 token
    const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("myToken="))
        ?.split("=")[1];
    // 如果有取得 token ，放入 header
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    }
    // 發出 check 請求，如果通過則取得產品，失敗則導回燈入頁
    axios.post(`${VITE_URL}/v2/api/user/check`)
        .then(() => {
            getProducts();
        }).catch(() => {
            Swal.fire({
                title: "請先登入",
                icon: "error",
                didClose: () => {
                    router.push("/")
                }
            })
        })
}
function getProducts(page = 1) {
    axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=${page}`)
        .then(res => {
            products.value = res.data.products;
            pagination.value = res.data.pagination;
        })
}
function addNewProduct() {
    dialog.value.dialog.showModal();
    tempProduct.value = {};
    isNew.value = true
}
function editProduct(product) {
    tempProduct.value = JSON.parse(JSON.stringify(product));
    isNew.value = false
    dialog.value.dialog.showModal();
}
function confirmProduct(product) {
    // 新增用 post ，修改用 put
    if (isNew.value) {
        axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product`, {
            data: product
        }).then(res => {
            Swal.fire({
                title: `${res.data.message}`,
                icon: "success"
            })
            dialog.value.dialog.close();
            tempProduct.value = {};
            getProducts(pagination.value.current_page || 1);
        }).catch(err => {
            Swal.fire({
                icon: "error",
                target: "dialog",
                title: "錯誤發生",
                text: `${err}`
            })
        })
    } else {
        const { id } = product;
        axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${id}`, {
            data: product
        })
            .then(res => {
                Swal.fire({
                    title: `${res.data.message}`,
                    icon: "success",
                })
                dialog.value.dialog.close();
                tempProduct.value = {};
                getProducts(pagination.value.current_page || 1);
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    target: "dialog",
                    title: "錯誤發生",
                    text: `${err.response.data.message}`
                })
            })
    }
}
function deleteProduct(product) {
    Swal.fire({
        title: `你確定要刪除 ${product.title} 嗎?`,
        showCancelButton: true,
        confirmButtonText: "確定",
        cancelButtonText: "取消"
    }).then(result => {
        if (result.isConfirmed) {
            axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${product.id}`).then(res => {
                getProducts();
                Swal.fire(res.data.message);
                Swal.fire({
                    icon: "success",
                    text: res.data.message
                })
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    text: err.response.data.message
                })
            })
        }
    })
}
onMounted(() => {
    checkAdmin();
})
</script>
<template>
    <div class="container mx-a">
        <div class="text-end mt-6">
            <!-- 新增按鈕 -->
            <button type="button"
                class="bg-#0d6efd border-0 text-white cursor-pointer inline-block px-3 py-1.5 rd font-size-4 hover:bg-#0b5ed7"
                @click="addNewProduct()">建立新的產品</button>
        </div>
        <!-- 產品列表 -->
        <table class="w-100% mt-6">
            <thead class="border-b-1 border-black border-solid fw-bold text-left">
                <tr>
                    <th width="120">
                        分類
                    </th>
                    <th>產品名稱</th>
                    <th width="120" class="text-end">
                        原價
                    </th>
                    <th width="120" class="text-end">
                        售價
                    </th>
                    <th width="100" class="text-center">
                        是否啟用
                    </th>
                    <th width="120">
                        編輯
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-#DEE2E6 border-solid" v-for="product in products" :key="product.id">
                    <td>{{ product.category }}</td>
                    <td>{{ product.title }}</td>
                    <td class="text-end">{{ product.origin_price }}</td>
                    <td class="text-end">{{ product.price }}</td>
                    <td class="text-center">
                        <span class="text-#198754" v-if="product.is_enabled">啟用</span>
                        <span class="text-red" v-else>未啟用</span>
                    </td>
                    <td>
                        <div class="btn-group">
                            <button type="button"
                                class="text-#0d6efd bg-transparent border-(1 #0d6efd solid r-0) rd-tl rd-bl px-2 py-1 hover:(bg-#0d6efd text-white cursor-pointer)"
                                @click="editProduct(product)">
                                編輯
                            </button>
                            <button type="button"
                                class="text-#dc3545 bg-transparent border-1 border-#de3545 border-solid rd-tr rd-br px-2 py-1 hover:(bg-#de3545 text-white cursor-pointer)"
                                @click="deleteProduct(product)">
                                刪除
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- Modal -->
    <ProductModal @confirm-product="confirmProduct" :temp-product="tempProduct" :is-new="isNew" ref="dialog">
    </ProductModal>
    <template v-if="products.length">
        <PaginationComponent :pages="pagination" @change-page="getProducts"></PaginationComponent>
    </template>
</template>
<style lang="postcss">
td,
th {
    padding: 8px;
}
</style>