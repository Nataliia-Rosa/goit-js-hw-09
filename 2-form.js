import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const o="feedback-form-state";let e={email:"",message:""};const a=document.querySelector(".feedback-form"),m=()=>{localStorage.setItem(o,JSON.stringify(e))},n=t=>{const{name:s,value:l}=t.target;e[s]=l.trim(),m()},r=t=>{t.preventDefault();const s=e.email.trim(),l=e.message.trim();if(!s||!l){alert("Fill all fields, please.");return}console.log({email:s,message:l}),a.reset(),e={email:"",message:""},localStorage.removeItem(o)},i=()=>{const t=localStorage.getItem(o);t&&(e=JSON.parse(t),a.elements.email.value=e.email||"",a.elements.message.value=e.message||"")};a.addEventListener("input",n);a.addEventListener("submit",r);i();
//# sourceMappingURL=2-form.js.map
