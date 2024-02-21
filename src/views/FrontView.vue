<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
    <nav>
        <ul class="flex gap-4 py-4 justify-center">
            <li>
                <RouterLink to="/" class="text-black hover:(underline text-blue)">首頁</RouterLink>
            </li>
            <li>
                <RouterLink to="/products" class="text-black hover:(underline text-blue)">產品</RouterLink>
            </li>
            <li>
                <RouterLink to="/carts" class="text-black hover:(underline text-blue)">購物車</RouterLink>
            </li>
            <li>
                <RouterLink to="/about" class="text-black hover:(underline text-blue)">關於</RouterLink>
            </li>

            <li>
                <RouterLink to="/login" class="text-black hover:(underline text-blue)">登入</RouterLink>
            </li>
        </ul>
    </nav>
    <div class="container mx-a">
        <h1>這是前台</h1>
    </div>
    <RouterView />
</template>