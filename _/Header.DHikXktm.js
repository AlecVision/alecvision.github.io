import{j as e}from"./utils.Bdz4iy7H.js";import{B as s}from"./button.Bp9ou3ml.js";import{r as a}from"./index.BWNpMPDr.js";import{c as r}from"./createLucideIcon.D5i-_p1e.js";import"./index.WDyJjBQ1.js";const i=r("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),l=r("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),n=[{name:"About",href:"/#about"},{name:"Services",href:"/#services"},{name:"Case Studies",href:"/#case-studies"},{name:"Process",href:"/#process"},{name:"FAQ",href:"/#faq"}];function c(r){const[c,t]=a.useState(!1);return e.jsxs("header",{className:"border-line-firm/20 bg-surface-soft/90 fixed z-50 w-full border-b backdrop-blur-md",children:[e.jsx("div",{className:"mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 place-content-between items-center",children:[e.jsxs("a",{href:"/",className:"flex items-center gap-2",children:[r.logoIcon,e.jsx("span",{className:"text-surface-hard hover:text-surface-sharp text-xl font-bold",children:"AlecVision"})]}),e.jsx("nav",{className:"hidden md:flex lg:space-x-6 xl:space-x-8",children:n.map((a=>e.jsx(s,{variant:"link",asChild:!0,children:e.jsx("a",{href:a.href,children:a.name})},a.name)))}),e.jsx("div",{className:"hidden items-center space-x-4 md:flex",children:e.jsx(s,{variant:"default",asChild:!0,children:e.jsx("a",{href:"/#contact",children:"Contact Us"})})}),e.jsx("div",{className:"md:hidden",children:e.jsx(s,{variant:"outline",size:"icon",onClick:()=>t(!c),children:c?e.jsx(l,{className:"h-6 w-6"}):e.jsx(i,{className:"h-6 w-6"})})})]})}),c&&e.jsx("div",{className:"border-line-soft/20 border-t md:hidden",children:e.jsxs("div",{className:"space-y-1 px-2 pt-2 pb-3",children:[n.map((a=>e.jsx(s,{size:"lg",variant:"ghost",className:"block w-full px-3 py-2 text-left text-base font-medium",asChild:!0,onClick:()=>t(!1),children:e.jsx("a",{href:a.href,children:a.name})},a.name))),e.jsx(s,{variant:"default",className:"mt-4 w-full",asChild:!0,children:e.jsx("a",{href:"/#contact",onClick:()=>t(!1),children:"Contact Us"})})]})})]})}export{c as default};
