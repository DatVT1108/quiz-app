import{u as v,a as b,r as l,j as t,b as h,L,s as N,D as O,c as w,d as E}from"./index-BJudc4yJ.js";import{Q as D}from"./QuizListItem-C7aiHqTT.js";const Q=o=>{for(let n=o.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[o[n],o[s]]=[o[s],o[n]]}return o};function I({isLoading:o,isError:n,quizzes:s}){const j=v(),m=b(),[c,f]=l.useState({}),p=(r,e)=>{f(a=>({...a,[r]:e}))};let d=Object.keys(c).length;const[x,S]=l.useState([]);l.useEffect(()=>(s&&s.length!==0&&S(()=>{const r=[];for(const e of s){const a=[e.correct_answer,...e.incorrect_answers],g=Q(a);r.push(g)}return r}),()=>f({})),[s]);let u;o?u=t.jsx(L,{}):n?u=t.jsx("div",{children:"Error loading quizzes"}):u=s.map((r,e)=>t.jsx(D,{options:x[e],question:r.question,selectedOption:c[e]||null,setSelectedOption:a=>p(e,a)},e));const y=()=>{const r=s.map((e,a)=>({...e,options:x[a],selected_answer:c[a]}));m(N(r)),j("/result")};return t.jsxs("div",{className:"w-full flex flex-col gap-5",children:[u,t.jsx("div",{className:"flex",children:d===s.length&&t.jsx(h.Button,{className:"mt-4 mx-auto bg-gray-800 w-28",onClick:y,children:"Submit"})})]})}function F(){var g;const[o,n]=l.useState(""),[s,j]=l.useState(""),[m,c]=l.useState(!0),[f,p]=l.useState(!0);let d,x=O.map(i=>t.jsx(h.Option,{value:i.value,children:i.option},i.value));const{data:S,error:u,isLoading:y}=w();y?d=t.jsx("div",{children:"Loading category"}):u?d=t.jsx("div",{children:"Error load category"}):d=S.trivia_categories.map(i=>t.jsx(h.Option,{value:""+i.id,children:i.name},i.id));const[r,e]=E(),a=i=>{i.preventDefault();let C=!0;o||(c(!1),C=!1),s||(p(!1),C=!1),C&&r({category:o,difficulty:s})};return t.jsxs("div",{className:"flex flex-col items-center py-5 px-10",children:[t.jsx("h1",{className:"font-bold text-2xl",children:"Quiz Create"}),t.jsxs("form",{className:"w-full flex flex-row gap-2 py-4",onSubmit:a,children:[t.jsxs("div",{className:"w-full h-16",children:[t.jsx(h.Select,{label:"Select category",onChange:i=>{n(i||""),c(!0)},name:"category",id:"categorySelect",error:!m,children:d}),m?"":t.jsx("p",{className:"text-sm text-red-600",children:"Please choose a category"})]}),t.jsxs("div",{className:"w-full h-16",children:[t.jsx(h.Select,{label:"Select difficulty",onChange:i=>{j(i||""),p(!0)},id:"difficultySelect",error:!f,children:x}),f?"":t.jsx("p",{className:"text-sm text-red-600",children:"Please choose a difficulty"})]}),t.jsx("button",{className:"h-10 w-20 px-4 rounded-lg border border-gray-600 hover:bg-gray-200",id:"createBtn",type:"submit",children:"Create"})]}),!e.isUninitialized&&t.jsx(I,{isLoading:(e==null?void 0:e.isLoading)||(e==null?void 0:e.isFetching),isError:e==null?void 0:e.isError,quizzes:(g=e==null?void 0:e.data)==null?void 0:g.results})]})}export{F as default};
