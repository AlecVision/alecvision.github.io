import{j as e}from"./utils.BhOZ99Vo.js";import{B as a}from"./button.BbdHmLoq.js";import{r as t}from"./index.De2ii6Pa.js";import{c as n}from"./createLucideIcon.Bm3VueMG.js";import"./index.yBjzXJbu.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],d=n("Menu",i);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],x=n("X",o),r=[{name:"About",href:"/#about"},{name:"Services",href:"/#services"},{name:"Case Studies",href:"/#case-studies"},{name:"Process",href:"/#process"},{name:"FAQ",href:"/#faq"}];function b(){const[l,c]=t.useState(!1);return e.jsxs("header",{className:"border-line-firm/20 bg-surface-soft/90 fixed z-50 w-full border-b backdrop-blur-md",children:[e.jsx("div",{className:"mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 place-content-between items-center",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs("a",{href:"/",className:"flex items-center space-x-2",children:[e.jsx("div",{className:"relative h-10 w-10",children:e.jsx("img",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-yIrDM57HiRlJYbCM1gt5XcuS9Huuc2.png",alt:"AlecVision Logo",className:"absolute top-0 left-0 h-full w-full rounded-md object-cover object-top"})}),e.jsx("span",{className:"text-surface-hard hover:text-surface-sharp text-xl font-bold",children:"AlecVision"})]})}),e.jsx("nav",{className:"hidden md:flex lg:space-x-6 xl:space-x-8",children:r.map(s=>e.jsx(a,{variant:"link",asChild:!0,children:e.jsx("a",{href:s.href,children:s.name})},s.name))}),e.jsx("div",{className:"hidden items-center space-x-4 md:flex",children:e.jsx(a,{variant:"default",asChild:!0,children:e.jsx("a",{href:"/#contact",children:"Contact Us"})})}),e.jsx("div",{className:"md:hidden",children:e.jsx(a,{variant:"outline",size:"icon",onClick:()=>c(!l),children:l?e.jsx(x,{className:"h-6 w-6"}):e.jsx(d,{className:"h-6 w-6"})})})]})}),l&&e.jsx("div",{className:"border-line-soft/20 border-t md:hidden",children:e.jsxs("div",{className:"space-y-1 px-2 pt-2 pb-3",children:[r.map(s=>e.jsx(a,{size:"lg",variant:"ghost",className:"block w-full px-3 py-2 text-left text-base font-medium",asChild:!0,onClick:()=>c(!1),children:e.jsx("a",{href:s.href,children:s.name})},s.name)),e.jsx(a,{variant:"default",className:"mt-4 w-full",asChild:!0,children:e.jsx("a",{href:"/#contact",onClick:()=>c(!1),children:"Contact Us"})})]})})]})}export{b as default};
