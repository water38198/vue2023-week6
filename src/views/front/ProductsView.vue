<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Swal from 'sweetalert2'
import ProductModal from '@/components/front/ProductModal.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
const productsData = ref();
const productModal = ref();
const tempProduct = ref({});
const loadingItems = ref([]);


function getProducts() {
    loadingItems.value.push("fullPage")
    axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
            productsData.value = res.data.products;
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            loadingItems.value.splice(loadingItems.value.indexOf("fullPage"), 1)
        })
}

function showModal(product) {
    tempProduct.value = product;
    productModal.value.dialog.showModal()
}
function addToCart(product_id, qty = 1) {
    loadingItems.value.push(product_id);
    axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, {
        data: {
            product_id,
            qty
        }
    })
        .then(() => {
            productModal.value.dialog.close();
            Swal.fire({
                title: "加入購物車成功",
                icon: "success",
                toast: true,
                position: "bottom-end",
                timer: "1500",
                showConfirmButton: false
            })
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            loadingItems.value.splice(loadingItems.value.indexOf(product_id), 1)
        })
}



onMounted(() => {
    getProducts();
})
</script>
<template>
    <main>
        <Loading :active="loadingItems.includes('fullPage')" :fullPage="true" transition="fade" />
        <div class="container mx-a">
            <!-- 產品列表 -->
            <table class="w-100% mt-6 mb-4">
                <thead>
                    <tr class="font-bold text-left border-(b black solid )">
                        <th>圖片</th>
                        <th>商品名稱</th>
                        <th>價格</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-(b solid #eee)" v-for="product in productsData" :key="product.id">
                        <td class="w-200px">
                            <div class="h-100px bg-(center cover)"
                                :style="{ backgroundImage: `url('${product.imageUrl}')` }">
                            </div>
                        </td>
                        <td>
                            {{ product.title }}
                        </td>
                        <td>
                            <div class="font-size-5" v-if="product.price === product.origin_price"> {{ product.price }} 元
                            </div>
                            <div v-else>
                                <del class="font-size-4">原價 {{ product.origin_price }} 元</del>
                                <div class="font-size-5">現在只要 {{ product.price }} 元</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <button type="button"
                                    class="bg-transparent text-#6c757d px2 py-1 border-(1 r-0 solid #6c757d) rd-(tl bl) hover:(bg-#6c757d text-white cursor-pointer) "
                                    @click="showModal(product)"
                                    :class="{ 'op-50 cursor-not-allowed relative': loadingItems.includes(product.id) }"
                                    :disabled="loadingItems.includes(product.id)">
                                    <div class="i-svg-spinners:12-dots-scale-rotate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        v-if="loadingItems.includes(product.id)"></div>
                                    <span>
                                        查看更多
                                    </span>
                                </button>
                                <button type="button"
                                    class="bg-transparent text-red px2 py-1 border-(1 solid red) rd-(tr br) hover:(bg-red text-white cursor-pointer) "
                                    @click="addToCart(product.id)"
                                    :class="{ ' cursor-not-allowed relative': loadingItems.includes(product.id) }"
                                    :disabled="loadingItems.includes(product.id)">
                                    <div class="i-svg-spinners:12-dots-scale-rotate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        v-if="loadingItems.includes(product.id)"></div>
                                    <span :class="{ 'op-50': loadingItems.includes(product.id) }">加到購物車</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </main>
    <ProductModal ref="productModal" :temp-product="tempProduct" @add-to-cart="addToCart"></ProductModal>
</template>
<style lang="postcss">
td,
th {
    @apply p-2 align-middle;
}

form input:focus {
    @apply outline-0 border-#86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
}

.invalid {
    @apply border-red border-2;
}
</style>