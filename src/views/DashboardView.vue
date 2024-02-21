<script setup>
import { onMounted } from 'vue';
import Swal from 'sweetalert2'
const { VITE_URL } = import.meta.env;
import { useRouter, RouterLink, RouterView } from 'vue-router'
const router = useRouter();

import axios from 'axios';

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
            console.log("驗證成功")
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
onMounted(() => {
    checkAdmin();
})
</script>

<template>
    <div class="container mx-a">
        <h2 class="font-size-8">這是後台</h2>
        <ul class="flex gap-4">
            <li>
                <RouterLink to="/admin/products">後台產品</RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/orders">後台訂單</RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/coupons">後台優惠券</RouterLink>
            </li>
        </ul>
    </div>
    <RouterView />
</template>