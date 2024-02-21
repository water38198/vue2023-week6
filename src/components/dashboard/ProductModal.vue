<script setup>
import { ref, watch } from 'vue'
const props = defineProps(['tempProduct', 'isNew']);
const tempProduct = ref(props.tempProduct);
const dialog = ref();
function autoClose(e) {
    // 點擊 dialog 外圍區域自動關閉
    if (e.target.nodeName === "DIALOG") {
        dialog.value.close();
    }
}
function addNewImages() {
    // 先檢查有無 imagesUrl屬性
    if (!tempProduct.value.imagesUrl) {
        tempProduct.value.imagesUrl = []
    }
    // 如果最後一個為空則不能新增圖片
    if (tempProduct.value.imagesUrl[tempProduct.value.imagesUrl.length - 1] === "") return
    tempProduct.value.imagesUrl.push("")
}
// 父層 temp 變動時，子層 tempProduct 跟著變動
watch(() => props.tempProduct, () => {
    tempProduct.value = props.tempProduct
})
defineExpose({
    dialog
})
</script>
<template>
    <dialog ref="dialog" class="max-w-1140px w-100% border-0 rd p-0 backdrop:backdrop-blur-3" @click="autoClose">
        <form method="dialog">
            <div class="bg-#212529 p-4 flex justify-between items-center">
                <h3 class="text-white">{{ isNew ? "新增產品" : "編輯產品" }}</h3>
                <button type="button" class="i-ic:baseline-close p-2 text-white font-size-4 hover:cursor-pointer"
                    @click="dialog.close()"></button>
            </div>
            <div class="grid grid-cols-12 gap-6 p-3">
                <div class="col-span-4">
                    <div class="input-group">
                        <label for="imagUrl" class="block">主要圖片</label>
                        <input type="text" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl" class="mb-2">
                        <img :src="tempProduct.imageUrl" alt="">
                    </div>
                    <img src="" alt="">
                    <div>
                        <h4>多圖新增</h4>
                        <div v-for='(image, index) in tempProduct.imagesUrl' :key="image">
                            <div class="flex justify-between mb-2">
                                <label for="images-1">圖片網址{{ index + 1 }}</label>
                                <button
                                    class="i-ic:baseline-close font-size-5 opacity-50  hover:(cursor-pointer opacity-75)"
                                    @click="tempProduct.imagesUrl.splice(index, 1)"></button>
                            </div>
                            <div class="input-group">
                                <input type="text" v-model="tempProduct.imagesUrl[index]" placeholder="請輸入圖片網址"
                                    class=",b-2">
                            </div>
                            <img :src="image" alt="">
                        </div>
                        <button type="button"
                            class="inline-block w-100% bg-transparent border-#0d6efd border-solid border-1 rd text-#0d6efd py-1 mb-1"
                            hover="cursor-pointer bg-#0d6efd text-white" @click="addNewImages">新增圖片</button>
                    </div>
                </div>
                <div class="col-span-8">
                    <div class="grid grid-cols-2 gap-col-6 gap-row-4 ">
                        <div class="input-group  col-span-2">
                            <label for="title">標題</label>
                            <input type="text" id="title" placeholder="請輸入標題" v-model="tempProduct.title">
                        </div>
                        <div class="input-group">
                            <label for="category">分類</label>
                            <input type="text" id="category" placeholder="請輸入分類" list="categories" autocomplete="off"
                                v-model="tempProduct.category">
                            <datalist id="categories">
                                <option value="策略">策略</option>
                                <option value="派對">派對</option>
                                <option value="雙人">雙人</option>
                                <option value="陣營">陣營</option>
                                <option value="家庭">家庭</option>
                                <option value="合作">合作</option>
                                <option value="劇情">劇情</option>
                            </datalist>
                        </div>
                        <div class="input-group">
                            <label for="unit">單位</label>
                            <input type="text" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit">
                        </div>
                        <div class="input-group">
                            <label for="origin_price">原價</label>
                            <input type="number" id="origin_price" placeholder="請輸入原價" min="0"
                                v-model.number="tempProduct.origin_price">
                        </div>
                        <div class="input-group">
                            <label for="price">售價</label>
                            <input type="number" id="price" placeholder="請輸入售價" min="0" v-model.number="tempProduct.price">
                        </div>
                        <div class="input-group">
                            <label for="language">語言</label>
                            <select name="" id="language">
                                <option value="繁體中文">繁體中文</option>
                                <option value="簡體中文">簡體中文</option>
                                <option value="英文">英文</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="condition">狀況：</label>
                            <select name="" id="condition">
                                <option value="良好">良好</option>
                                <option value="盒子損傷">盒子損傷</option>
                                <option value="配件損傷">配件損傷</option>
                                <option value="受潮">受潮</option>
                                <option value="缺件">缺件</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                        <div class="input-group col-span-2">
                            <label for="description">產品敘述</label>
                            <textarea name="" id="description" rows="4" v-model="tempProduct.description"></textarea>
                        </div>
                        <div class="input-group col-span-2">
                            <label for="content">說明內容</label>
                            <textarea name="" id="content" rows="4" v-model="tempProduct.content"></textarea>
                        </div>
                        <div>
                            <input type="checkbox" id="is_enabled" v-model="tempProduct.is_enabled" :true-value="1"
                                :false-value="0">
                            <label for="is_enabled">是否啟用</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-end p-3 border-(t solid #dee2e6)">
                <button type="button"
                    class="m-1 px-3 py-1.5 bg-transparent text-#6c757d border-(1 solid #6c757d ) rd hover:(cursor-pointer bg-#5c636a text-white)"
                    @click="dialog.close()">取消</button>
                <button type="button"
                    class="m-1 px-3 py-1.5 text-white bg-#0d6efd border-0 rd hover:(cursor-pointer bg-#0b5ed7)"
                    @click="$emit('confirmProduct', tempProduct)">確定</button>
            </div>
        </form>
    </dialog>
</template>
<style scoped lang="postcss">
.input-group {
    label {
        @apply mb-2 block
    }

    input, textarea, select {
        --at-apply: w-100% rd border-1 border-solid px-3 py-1.5 font-size-4 focus:(outline-0 border-#86b7fe border-solid shadow-[0px_0px_0px_0.25rem_#C2DBFE])
    }
}
</style>
