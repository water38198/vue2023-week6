import{a as c,S as f}from"./sweetalert2.all-BG_37rGc.js";import{l as m,f as p,c as h,a as e,b as o,w as n,u as t,F as k,o as R,d as i,R as r,e as V}from"./index-BkDzF00W.js";var x={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payroom",BASE_URL:"/vue2023-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const E={class:"container mx-a"},v=e("h2",{class:"font-size-8"},"這是後台",-1),w={class:"flex gap-4"},B={__name:"DashboardView",setup(T){const{VITE_URL:l}=x,u=m();function d(){var a;const s=(a=document.cookie.split("; ").find(_=>_.startsWith("myToken=")))==null?void 0:a.split("=")[1];s&&(c.defaults.headers.common.Authorization=s),c.post(`${l}/v2/api/user/check`).then(()=>{console.log("驗證成功")}).catch(()=>{f.fire({title:"請先登入",icon:"error",didClose:()=>{u.push("/")}})})}return p(()=>{d()}),(s,a)=>(R(),h(k,null,[e("div",E,[v,e("ul",w,[e("li",null,[o(t(r),{to:"/admin/products"},{default:n(()=>[i("後台產品")]),_:1})]),e("li",null,[o(t(r),{to:"/admin/orders"},{default:n(()=>[i("後台訂單")]),_:1})]),e("li",null,[o(t(r),{to:"/admin/coupons"},{default:n(()=>[i("後台優惠券")]),_:1})])])]),o(t(V))],64))}};export{B as default};
