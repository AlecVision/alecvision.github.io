import{j as c}from"./jsx-runtime.D3GSbgeI.js";import{r as a,R as g,a as he}from"./index.De2ii6Pa.js";import{u as I,S as D,B as Ne}from"./button.C2V_-GST.js";import{r as be}from"./index.Cie5JJtK.js";import{c as L}from"./utils.B8F8Dq1p.js";import{c as Ae}from"./createLucideIcon.Bm3VueMG.js";import"./index.yBjzXJbu.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ye=Ae("ChevronDown",we);function $(e,t=[]){let o=[];function n(s,i){const l=a.createContext(i),u=o.length;o=[...o,i];const d=f=>{const{scope:N,children:m,...v}=f,h=N?.[e]?.[u]||l,C=a.useMemo(()=>v,Object.values(v));return c.jsx(h.Provider,{value:C,children:m})};d.displayName=s+"Provider";function x(f,N){const m=N?.[e]?.[u]||l,v=a.useContext(m);if(v)return v;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[d,x]}const r=()=>{const s=o.map(i=>a.createContext(i));return function(l){const u=l?.[e]||s;return a.useMemo(()=>({[`__scope${e}`]:{...l,[e]:u}}),[l,u])}};return r.scopeName=e,[n,Re(r,...t)]}function Re(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const i=n.reduce((l,{useScope:u,scopeName:d})=>{const f=u(s)[`__scope${d}`];return{...l,...f}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return o.scopeName=t.scopeName,o}function Ie(e){const t=e+"CollectionProvider",[o,n]=$(t),[r,s]=o(t,{collectionRef:{current:null},itemMap:new Map}),i=m=>{const{scope:v,children:h}=m,C=g.useRef(null),b=g.useRef(new Map).current;return c.jsx(r,{scope:v,itemMap:b,collectionRef:C,children:h})};i.displayName=t;const l=e+"CollectionSlot",u=g.forwardRef((m,v)=>{const{scope:h,children:C}=m,b=s(l,h),p=I(v,b.collectionRef);return c.jsx(D,{ref:p,children:C})});u.displayName=l;const d=e+"CollectionItemSlot",x="data-radix-collection-item",f=g.forwardRef((m,v)=>{const{scope:h,children:C,...b}=m,p=g.useRef(null),A=I(v,p),y=s(d,h);return g.useEffect(()=>(y.itemMap.set(p,{ref:p,...b}),()=>void y.itemMap.delete(p))),c.jsx(D,{[x]:"",ref:A,children:C})});f.displayName=d;function N(m){const v=s(e+"CollectionConsumer",m);return g.useCallback(()=>{const C=v.collectionRef.current;if(!C)return[];const b=Array.from(C.querySelectorAll(`[${x}]`));return Array.from(v.itemMap.values()).sort((y,R)=>b.indexOf(y.ref.current)-b.indexOf(R.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:i,Slot:u,ItemSlot:f},N,n]}function G(e,t,{checkForDefaultPrevented:o=!0}={}){return function(r){if(e?.(r),o===!1||!r.defaultPrevented)return t?.(r)}}function K(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...o)=>t.current?.(...o),[])}function U({prop:e,defaultProp:t,onChange:o=()=>{}}){const[n,r]=Pe({defaultProp:t,onChange:o}),s=e!==void 0,i=s?e:n,l=K(o),u=a.useCallback(d=>{if(s){const f=typeof d=="function"?d(e):d;f!==e&&l(f)}else r(d)},[s,e,r,l]);return[i,u]}function Pe({defaultProp:e,onChange:t}){const o=a.useState(e),[n]=o,r=a.useRef(n),s=K(t);return a.useEffect(()=>{r.current!==n&&(s(n),r.current=n)},[n,r,s]),o}be();var je=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],P=je.reduce((e,t)=>{const o=a.forwardRef((n,r)=>{const{asChild:s,...i}=n,l=s?D:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(l,{...i,ref:r})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{}),S=globalThis?.document?a.useLayoutEffect:()=>{};function Se(e,t){return a.useReducer((o,n)=>t[o][n]??o,e)}var Q=e=>{const{present:t,children:o}=e,n=_e(t),r=typeof o=="function"?o({present:n.isPresent}):a.Children.only(o),s=I(n.ref,Ee(r));return typeof o=="function"||n.isPresent?a.cloneElement(r,{ref:s}):null};Q.displayName="Presence";function _e(e){const[t,o]=a.useState(),n=a.useRef({}),r=a.useRef(e),s=a.useRef("none"),i=e?"mounted":"unmounted",[l,u]=Se(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const d=j(n.current);s.current=l==="mounted"?d:"none"},[l]),S(()=>{const d=n.current,x=r.current;if(x!==e){const N=s.current,m=j(d);e?u("MOUNT"):m==="none"||d?.display==="none"?u("UNMOUNT"):u(x&&N!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),S(()=>{if(t){let d;const x=t.ownerDocument.defaultView??window,f=m=>{const h=j(n.current).includes(m.animationName);if(m.target===t&&h&&(u("ANIMATION_END"),!r.current)){const C=t.style.animationFillMode;t.style.animationFillMode="forwards",d=x.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=C)})}},N=m=>{m.target===t&&(s.current=j(n.current))};return t.addEventListener("animationstart",N),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{x.clearTimeout(d),t.removeEventListener("animationstart",N),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:a.useCallback(d=>{d&&(n.current=getComputedStyle(d)),o(d)},[])}}function j(e){return e?.animationName||"none"}function Ee(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var Me=he.useId||(()=>{}),Oe=0;function Y(e){const[t,o]=a.useState(Me());return S(()=>{o(n=>n??String(Oe++))},[e]),t?`radix-${t}`:""}var q="Collapsible",[Te,J]=$(q),[De,W]=Te(q),X=a.forwardRef((e,t)=>{const{__scopeCollapsible:o,open:n,defaultOpen:r,disabled:s,onOpenChange:i,...l}=e,[u=!1,d]=U({prop:n,defaultProp:r,onChange:i});return c.jsx(De,{scope:o,disabled:s,contentId:Y(),open:u,onOpenToggle:a.useCallback(()=>d(x=>!x),[d]),children:c.jsx(P.div,{"data-state":H(u),"data-disabled":s?"":void 0,...l,ref:t})})});X.displayName=q;var Z="CollapsibleTrigger",ee=a.forwardRef((e,t)=>{const{__scopeCollapsible:o,...n}=e,r=W(Z,o);return c.jsx(P.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":H(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...n,ref:t,onClick:G(e.onClick,r.onOpenToggle)})});ee.displayName=Z;var F="CollapsibleContent",te=a.forwardRef((e,t)=>{const{forceMount:o,...n}=e,r=W(F,e.__scopeCollapsible);return c.jsx(Q,{present:o||r.open,children:({present:s})=>c.jsx(ke,{...n,ref:t,present:s})})});te.displayName=F;var ke=a.forwardRef((e,t)=>{const{__scopeCollapsible:o,present:n,children:r,...s}=e,i=W(F,o),[l,u]=a.useState(n),d=a.useRef(null),x=I(t,d),f=a.useRef(0),N=f.current,m=a.useRef(0),v=m.current,h=i.open||l,C=a.useRef(h),b=a.useRef(void 0);return a.useEffect(()=>{const p=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(p)},[]),S(()=>{const p=d.current;if(p){b.current=b.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const A=p.getBoundingClientRect();f.current=A.height,m.current=A.width,C.current||(p.style.transitionDuration=b.current.transitionDuration,p.style.animationName=b.current.animationName),u(n)}},[i.open,n]),c.jsx(P.div,{"data-state":H(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!h,...s,ref:x,style:{"--radix-collapsible-content-height":N?`${N}px`:void 0,"--radix-collapsible-content-width":v?`${v}px`:void 0,...e.style},children:h&&r})});function H(e){return e?"open":"closed"}var Le=X,$e=ee,Ue=te,qe=a.createContext(void 0);function We(e){const t=a.useContext(qe);return e||t||"ltr"}var w="Accordion",Fe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[V,He,Ve]=Ie(w),[E,lt]=$(w,[Ve,J]),B=J(),oe=g.forwardRef((e,t)=>{const{type:o,...n}=e,r=n,s=n;return c.jsx(V.Provider,{scope:e.__scopeAccordion,children:o==="multiple"?c.jsx(Ke,{...s,ref:t}):c.jsx(Ge,{...r,ref:t})})});oe.displayName=w;var[ne,Be]=E(w),[re,ze]=E(w,{collapsible:!1}),Ge=g.forwardRef((e,t)=>{const{value:o,defaultValue:n,onValueChange:r=()=>{},collapsible:s=!1,...i}=e,[l,u]=U({prop:o,defaultProp:n,onChange:r});return c.jsx(ne,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:u,onItemClose:g.useCallback(()=>s&&u(""),[s,u]),children:c.jsx(re,{scope:e.__scopeAccordion,collapsible:s,children:c.jsx(se,{...i,ref:t})})})}),Ke=g.forwardRef((e,t)=>{const{value:o,defaultValue:n,onValueChange:r=()=>{},...s}=e,[i=[],l]=U({prop:o,defaultProp:n,onChange:r}),u=g.useCallback(x=>l((f=[])=>[...f,x]),[l]),d=g.useCallback(x=>l((f=[])=>f.filter(N=>N!==x)),[l]);return c.jsx(ne,{scope:e.__scopeAccordion,value:i,onItemOpen:u,onItemClose:d,children:c.jsx(re,{scope:e.__scopeAccordion,collapsible:!0,children:c.jsx(se,{...s,ref:t})})})}),[Qe,M]=E(w),se=g.forwardRef((e,t)=>{const{__scopeAccordion:o,disabled:n,dir:r,orientation:s="vertical",...i}=e,l=g.useRef(null),u=I(l,t),d=He(o),f=We(r)==="ltr",N=G(e.onKeyDown,m=>{if(!Fe.includes(m.key))return;const v=m.target,h=d().filter(T=>!T.ref.current?.disabled),C=h.findIndex(T=>T.ref.current===v),b=h.length;if(C===-1)return;m.preventDefault();let p=C;const A=0,y=b-1,R=()=>{p=C+1,p>y&&(p=A)},O=()=>{p=C-1,p<A&&(p=y)};switch(m.key){case"Home":p=A;break;case"End":p=y;break;case"ArrowRight":s==="horizontal"&&(f?R():O());break;case"ArrowDown":s==="vertical"&&R();break;case"ArrowLeft":s==="horizontal"&&(f?O():R());break;case"ArrowUp":s==="vertical"&&O();break}const ge=p%b;h[ge].ref.current?.focus()});return c.jsx(Qe,{scope:o,disabled:n,direction:r,orientation:s,children:c.jsx(V.Slot,{scope:o,children:c.jsx(P.div,{...i,"data-orientation":s,ref:u,onKeyDown:n?void 0:N})})})}),_="AccordionItem",[Ye,z]=E(_),ce=g.forwardRef((e,t)=>{const{__scopeAccordion:o,value:n,...r}=e,s=M(_,o),i=Be(_,o),l=B(o),u=Y(),d=n&&i.value.includes(n)||!1,x=s.disabled||e.disabled;return c.jsx(Ye,{scope:o,open:d,disabled:x,triggerId:u,children:c.jsx(Le,{"data-orientation":s.orientation,"data-state":fe(d),...l,...r,ref:t,disabled:x,open:d,onOpenChange:f=>{f?i.onItemOpen(n):i.onItemClose(n)}})})});ce.displayName=_;var ie="AccordionHeader",ae=g.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,r=M(w,o),s=z(ie,o);return c.jsx(P.h3,{"data-orientation":r.orientation,"data-state":fe(s.open),"data-disabled":s.disabled?"":void 0,...n,ref:t})});ae.displayName=ie;var k="AccordionTrigger",le=g.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,r=M(w,o),s=z(k,o),i=ze(k,o),l=B(o);return c.jsx(V.ItemSlot,{scope:o,children:c.jsx($e,{"aria-disabled":s.open&&!i.collapsible||void 0,"data-orientation":r.orientation,id:s.triggerId,...l,...n,ref:t})})});le.displayName=k;var de="AccordionContent",ue=g.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,r=M(w,o),s=z(de,o),i=B(o);return c.jsx(Ue,{role:"region","aria-labelledby":s.triggerId,"data-orientation":r.orientation,...i,...n,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});ue.displayName=de;function fe(e){return e?"open":"closed"}var Je=oe,Xe=ce,Ze=ae,pe=le,me=ue;const et=Je,xe=a.forwardRef(({className:e,...t},o)=>c.jsx(Xe,{ref:o,className:L("border-b",e),...t}));xe.displayName="AccordionItem";const ve=a.forwardRef(({className:e,children:t,...o},n)=>c.jsx(Ze,{className:"flex",children:c.jsxs(pe,{ref:n,className:L("flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...o,children:[t,c.jsx(ye,{className:"text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200"})]})}));ve.displayName=pe.displayName;const Ce=a.forwardRef(({className:e,children:t,...o},n)=>c.jsx(me,{ref:n,className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...o,children:c.jsx("div",{className:L("pb-4 pt-0",e),children:t})}));Ce.displayName=me.displayName;function dt(){return c.jsx("section",{id:"faq",className:"bg-surface-firm py-24 sm:py-32",children:c.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[c.jsx("div",{className:"mx-auto max-w-2xl lg:text-center",children:c.jsx("h2",{className:"text-surface-hard text-3xl font-bold tracking-tight sm:text-4xl",children:"Frequently Asked Questions"})}),c.jsx("div",{className:"mx-auto mt-16 max-w-2xl",children:c.jsx(et,{type:"single",collapsible:!0,className:"w-full",children:tt.map((e,t)=>c.jsxs(xe,{value:`item-${t}`,className:"border-line-firm/20",children:[c.jsx(Ne,{variant:"link",className:"w-full justify-between p-0.5 py-6",asChild:!0,size:"lg",children:c.jsx(ve,{children:c.jsx("span",{className:"text-wrap",children:e.question})})}),c.jsx(Ce,{className:"text-line-firm/80 px-1",children:e.answer})]},t))})})]})})}const tt=[{question:"What types of projects do you handle?",answer:"We specialize in custom software development—from mobile and web applications to internal systems and distributed platforms. Our focus is on delivering scalable solutions that evolve with your business."},{question:"What engagement models do you offer?",answer:"We offer flexible engagement options including fixed contracts, hourly work, contract-to-hire, consulting, and staff augmentation, all tailored to your project's specific needs."},{question:"How do you ensure project success?",answer:"Our proven process—from in-depth discovery to ongoing support—ensures clear communication, rapid prototyping, and robust scaling, all backed by our purpose-driven internal systems."},{question:"How do you scale projects from a startup idea to an enterprise-level solution?",answer:"Our methodologies and internal processes are designed to seamlessly scale projects. We focus on building a strong foundation that allows your solution to grow—from 0 to enterprise-level—with minimal overhead."}];export{dt as default};
