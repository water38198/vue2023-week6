import{l as v,r as c,c as _,b as h,u as b,a as e,k as p,v as u,y as w,F as x,o as g,p as y,q as k}from"./index-Buz5mNv1.js";import{S as i,a as V}from"./sweetalert2.all-BG_37rGc.js";import{L as E}from"./index-y47pw6yv.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";var S={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payroom",BASE_URL:"/vue2023-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const l=n=>(y("data-v-5f45ed7c"),n=n(),k(),n),I={class:"flex justify-center items-center h-screen font-sans"},z={action:"",ref:"loginForm"},R=l(()=>e("h1",{class:"text-center font-size-8 mb-8 font-medium"},"請先登入",-1)),T={class:"custom-input-group mb-4 position-relative"},B=l(()=>e("label",{for:"email",class:"position-absolute block w-100% top-0 left-0 z-2 p-4 hover:cursor-text"},"Email address",-1)),D={class:"custom-input-group mb-4 position-relative"},U=l(()=>e("label",{for:"password",class:"position-absolute block w-100% top-0 left-0 z-2 p-4 hover:cursor-text"},"Password",-1)),P={__name:"LoginView",setup(n){const{VITE_URL:m}=S,f=v(),o=c({username:"",password:""}),r=c(!1);function d(){if(o.value.username===""||o.value.password===""){i.fire({icon:"warning",title:"請正確填寫資訊"});return}r.value=!0,V.post(`${m}/v2/admin/signin`,o.value).then(s=>{const{expired:t,token:a}=s.data;document.cookie=`myToken = ${a}; expires = ${new Date(t)} `,i.fire({showConfirmButton:!1,icon:"success",title:"登入成功",timer:1e3,didClose:()=>{f.push("/admin")}})}).catch(s=>{i.fire({title:"登入失敗",icon:"error",text:`${(s==null?void 0:s.response.data.error.message)||""}`})}).finally(()=>{r.value=!1})}return(s,t)=>(g(),_(x,null,[h(b(E),{active:r.value,"full-page":!0},null,8,["active"]),e("main",null,[e("div",I,[e("form",z,[R,e("div",T,[p(e("input",{type:"email",id:"email",placeholder:"Email address",class:"font-size-4 px-3 py-4 b-1 border-solid border-#ced4da rd outline-none pointer-events-none","onUpdate:modelValue":t[0]||(t[0]=a=>o.value.username=a)},null,512),[[u,o.value.username]]),B]),e("div",D,[p(e("input",{type:"password",id:"password",placeholder:"Password",class:"font-size-4 px-3 py-4 b-1 border-solid border-#ced4da rd outline-none pointer-events-none","onUpdate:modelValue":t[1]||(t[1]=a=>o.value.password=a),onKeyup:w(d,["enter"])},null,544),[[u,o.value.password]]),U]),e("button",{type:"button",onClick:d,class:"block w-100% text-white bg-#0d6efd hover:bg-#0b5ed7 border-0 rd px-4 py-2 font-size-5 hover:cursor-pointer"},"登入")],512)])])],64))}},K=L(P,[["__scopeId","data-v-5f45ed7c"]]);export{K as default};
