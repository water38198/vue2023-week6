import{r as x,f as D,j as g,c as i,F as $,a as e,b as d,u as V,g as L,i as m,t as b,w as N,o as c,h as p,d as k,k as O,v as z}from"./index-BkDzF00W.js";import{a as y,S as C}from"./sweetalert2.all-BG_37rGc.js";import{L as E}from"./index-DrP_nYGR.js";var I={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payroom",BASE_URL:"/vue2023-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const M={class:"container mx-a"},B={key:0,class:"text-center py-10"},P={key:1},A=e("div",{class:"text-end"},[e("button",{class:"bg-transparent text-red px-3 py-1.5 border-1 border-solid border-red rd hover:bg-red hover:text-white hover:cursor-pointer"},"清空購物車")],-1),H={class:"w-100% relative"},j=e("thead",null,[e("tr",null,[e("th"),e("th",{class:"text-start"},"品名"),e("th",{class:"w-150px"},"數量/單位"),e("th",null,"單價")])],-1),X=["disabled","onClick"],G={key:0,class:"i-svg-spinners:12-dots-scale-rotate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},J={key:0,class:"text-#198754"},K={class:"flex mb-3"},Q=["onUpdate:modelValue","onChange"],W={class:"inline-block bg-#f8f9fa p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd-tr rd-br"},Y={class:"text-end"},Z={key:0,class:"text-#198754"},ee=e("td",{colspan:"3",class:"text-end"},"總計",-1),te={class:"text-end"},le={key:0},se=e("td",{colspan:"3",class:"text-end text-#198754"},"折扣價",-1),ae={class:"text-end text-#198754"},oe={class:"mb-12 relative"},re={class:"mb-4"},de=e("label",{for:"email",class:"inline-block mb-2"},"Email",-1),ne={class:"mb-4"},ie=e("label",{for:"姓名",class:"inline-block mb-2"},"姓名",-1),ce={class:"mb-4"},ue=e("label",{for:"電話",class:"inline-block mb-2"},"電話",-1),me={class:"mb-4"},be=e("label",{for:"地址",class:"inline-block mb-2"},"地址",-1),pe={class:"mb-4"},ve=e("label",{for:"message",class:"inline-block mb-2"},"留言(非必須)",-1),_e=e("div",{class:"text-end"},[e("button",{type:"submit",class:"p-x-3 p-y-1.5 bg-red text-white border-0 rd hover:bg-#bb2d3b hover:cursor-pointer"},"送出訂單")],-1),ge={__name:"CartView",setup(he){const{VITE_URL:v,VITE_PATH:_}=I,o=x({}),a=x([]);function h(){a.value.push("cart"),y.get(`${v}/v2/api/${_}/cart`).then(t=>{o.value=t.data.data}).catch(t=>{console.log(t)}).finally(()=>{a.value.splice(a.value.indexOf("cart"),1)})}const w=x(),n=x({user:{email:"",name:"",tel:"",address:""},message:""});function T(t){a.value.push(t),y.delete(`${v}/v2/api/${_}/cart/${t}`).then(()=>{h()}).catch(l=>{console.log(l)}).finally(()=>{a.value.splice(a.value.indexOf(t),1)})}function U(t){return/^(09)[0-9]{8}$/.test(t)?!0:"請輸入正確的電話號碼"}function F(){if(o.value.carts.length===0){C.fire({icon:"error",title:"目前沒有東西在購物車喔~"});return}a.value.push("order"),y.post(`${v}/v2/api/${_}/order`,{data:n.value}).then(t=>{C.fire({title:t.data.message,icon:"success"}),h(),w.value.resetForm()}).catch(t=>{console.log(t)}).finally(()=>{a.value.splice(a.value.indexOf("order"),1)})}const R=S((t,l=1)=>{y.put(`${v}/v2/api/${_}/cart/${t}`,{data:{product_id:t,qty:l}}).then(()=>{h()}).catch(u=>{console.log(u)})});function S(t){let l;return function(...u){clearTimeout(l),l=setTimeout(()=>{t(...u)},750)}}return D(()=>{h()}),(t,l)=>{const u=g("VField"),f=g("ErrorMessage"),q=g("VForm");return c(),i("div",M,[o.value.carts?(c(),i($,{key:0},[o.value.carts.length===0?(c(),i("p",B,"目前購物車沒有東西呦╮(╯_╰)╭")):(c(),i("div",P,[A,e("table",H,[d(V(E),{active:a.value.includes("cart"),"is-full-page":!1,transition:"fade"},null,8,["active"]),j,e("tbody",null,[o.value.carts?(c(!0),i($,{key:0},L(o.value.carts,s=>(c(),i("tr",{key:s.id,class:"border-b border-solid border-#eee"},[e("td",null,[e("button",{type:"button",class:p(["bg-transparent text-red px2 py-1 border-1 border-solid border-red rd hover:bg-red hover:text-white hover:cursor-pointer",{" cursor-not-allowed relative":a.value.includes(s.id)}]),disabled:a.value.includes(s.id),onClick:r=>T(s.id)},[a.value.includes(s.id)?(c(),i("div",G)):m("",!0),k(" X ")],10,X)]),e("td",null,[k(b(s.product.title)+" ",1),s.coupon?(c(),i("div",J," 已套用優惠券 ")):m("",!0)]),e("td",null,[e("div",null,[e("div",K,[O(e("input",{min:"1",type:"number",class:"p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd-tl rd-bl","onUpdate:modelValue":r=>s.qty=r,onChange:r=>V(R)(s.id,s.qty)},null,40,Q),[[z,s.qty,void 0,{number:!0}]]),e("span",W,b(s.product.unit),1)])])]),e("td",Y,[o.value.final_total!==o.value.total?(c(),i("small",Z,"折扣價：")):m("",!0),k(" "+b(s.final_total),1)])]))),128)):m("",!0)]),e("tfoot",null,[e("tr",null,[ee,e("td",te,b(o.value.final_total),1)]),o.value.final_total!==o.value.total?(c(),i("tr",le,[se,e("td",ae,b(o.value.total-o.value.final_total),1)])):m("",!0)])])]))],64)):m("",!0),e("div",oe,[d(V(E),{active:a.value.includes("order"),"is-full-page":!1},null,8,["active"]),d(q,{class:"w-50% mx-a",onSubmit:F,ref_key:"formRef",ref:w},{default:N(({errors:s})=>[e("div",re,[de,d(u,{type:"email",name:"email",id:"email",class:p(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:s.email}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:n.value.user.email,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value.user.email=r)},null,8,["class","modelValue"]),d(f,{name:"email",class:"text-red font-size-3"})]),e("div",ne,[ie,d(u,{type:"text",name:"姓名",id:"name",class:p(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:s.姓名}]),rules:"required",placeholder:"請輸入 姓名",modelValue:n.value.user.name,"onUpdate:modelValue":l[1]||(l[1]=r=>n.value.user.name=r)},null,8,["class","modelValue"]),d(f,{name:"姓名",class:"text-red font-size-3"})]),e("div",ce,[ue,d(u,{type:"tel",name:"電話",id:"tel",class:p(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:s.電話}]),rules:U,placeholder:"請輸入 電話",modelValue:n.value.user.tel,"onUpdate:modelValue":l[2]||(l[2]=r=>n.value.user.tel=r)},null,8,["class","modelValue"]),d(f,{name:"電話",class:"text-red font-size-3"})]),e("div",me,[be,d(u,{type:"address",name:"地址",id:"address",class:p(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:s.地址}]),rules:"required",placeholder:"請輸入 地址",modelValue:n.value.user.address,"onUpdate:modelValue":l[3]||(l[3]=r=>n.value.user.address=r)},null,8,["class","modelValue"]),d(f,{name:"地址",class:"text-red font-size-3"})]),e("div",pe,[ve,d(u,{as:"textarea",name:"orderForm.message",id:"message",cols:"30",rows:"10",class:"block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",modelValue:n.value.message,"onUpdate:modelValue":l[4]||(l[4]=r=>n.value.message=r)},null,8,["modelValue"])]),_e]),_:1},512)])])}}};export{ge as default};