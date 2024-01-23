import{j as e,r as h,a as j}from"./index-V0n-Iq7l.js";import{r as b,u as N}from"./useMovieContext-7Ng8b1h7.js";import{B as u,S as w}from"./Button-PoXAqODo.js";const x=({label:s,type:n,placeholder:l,value:t,onChange:a})=>e.jsxs("label",{className:"form-control w-full max-w-xs",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:s})}),e.jsx("input",{type:n,placeholder:l,className:"input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-indigo-600",value:t,onChange:a,required:!0})]}),S=({movie:s,setSuccessBook:n})=>{const[l,t]=h.useState({username:"",email:"",password:""}),a=r=>o=>{t(c=>({...c,[r]:o.target.value}))},d=r=>{r.preventDefault(),localStorage.setItem(s.id,JSON.stringify(l)),n(!0),document.getElementById("formmodal").close()};return e.jsxs("div",{className:"mt-2",children:[e.jsx(u,{className:"btn btn-primary",click:()=>document.getElementById("formmodal").showModal(),children:"Book Show"}),e.jsx("dialog",{id:"formmodal",className:"modal",children:e.jsxs("form",{className:"modal-box",onSubmit:d,children:[e.jsxs("h3",{className:"font-bold text-lg",children:["Book Show: ",s.name]}),e.jsxs("div",{className:"py-4",children:[e.jsx(x,{label:"Enter Your Name",type:"text",placeholder:"Enter Your Name",value:l.username,onChange:a("username")}),e.jsx(x,{label:"Enter Your Email",type:"email",placeholder:"Enter Your email address",value:l.email,onChange:a("email")}),e.jsx(x,{label:"Enter password",type:"password",placeholder:"Enter Your Password",value:l.password,onChange:a("password")})]}),e.jsxs("div",{className:"modal-action flex justify-between",children:[e.jsx(u,{className:"btn bg-red-500 text-white hover:bg-red-600",type:"submit",children:"Book Show"}),e.jsx(u,{className:"btn",click:()=>document.getElementById("formmodal").close(),children:"Close"})]})]})})]})},y=({movie:s})=>{var o,c,f,p,g;const[n,l]=h.useState(!1),t=s.id,a=JSON.parse(localStorage.getItem(t)),d=()=>{localStorage.removeItem(t),l(!1)},r=()=>{l(a!==null)};return h.useEffect(()=>{r()},[t]),e.jsxs("div",{className:"flex gap-3 min-h-96 h-full p-4 items-center max-md:flex-col",children:[e.jsx("div",{className:"h-full w-full flex items-center justify-center",children:e.jsx("img",{src:(o=s.image)==null?void 0:o.medium,alt:s.name})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:"text-3xl font-bold",children:s.name}),e.jsx("p",{children:b(s.summary)}),e.jsxs("div",{className:"flex font-smibold mt-4 gap-2 items-center",children:[e.jsx("p",{className:"font-bold",children:(c=s.network)==null?void 0:c.name}),s.genres.map((i,m)=>e.jsx("div",{children:e.jsx("p",{className:"bg-sky-500 text-white rounded-md p-1",children:i})},m))]}),e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("img",{src:w,alt:"",className:"h-6 w-6"}),(f=s.rating)==null?void 0:f.average]}),e.jsxs("div",{className:"font-semibold flex gap-2 p-2 bg-gray-200 rounded-lg",children:[e.jsxs("p",{children:["Schedule: ",(p=s.schedule)==null?void 0:p.time]}),(g=s.schedule)==null?void 0:g.days.map((i,m)=>e.jsx("div",{className:"flex gap-1",children:i},m))]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"bg-green-500 animate__animated animate__bounceInLeft p-2 text-white font-bold",children:["Show Booked Successfully : ",s.name]}),e.jsx("button",{className:"btn",onClick:()=>d(),children:"Cancel Booking"})]}),!n&&e.jsx(S,{movie:s,setSuccessBook:l})]})]})},I=()=>{const{id:s}=j(),{movieList:n}=N(),l=parseInt(s),t=n.filter(a=>a.id===l);return e.jsx("div",{className:"flex bg-white h-full w-full rounded-xl overflow-hidden",children:t.map(a=>e.jsx("div",{children:e.jsx(y,{movie:a})},a.id))})};export{I as default};
