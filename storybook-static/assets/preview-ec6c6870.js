import{d as _}from"./index-356e4a49.js";const{useMemo:f,useEffect:y}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__,{logger:M}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:l,window:h}=E,B=()=>h.matchMedia("(prefers-reduced-motion: reduce)").matches,S=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let n=e.find(a=>a.name===t);if(n)return n.value;if(t){let a=e.map(i=>i.name).join(", ");M.warn(_`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},v=r=>{(Array.isArray(r)?r:[r]).forEach(x)},x=r=>{let e=l.getElementById(r);e&&e.parentElement?.removeChild(e)},O=(r,e)=>{let t=l.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let n=l.createElement("style");n.setAttribute("id",r),n.innerHTML=e,l.head.appendChild(n)}},w=(r,e,t)=>{let n=l.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let a=l.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let i=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,d=l.getElementById(i);d?d.parentElement?.insertBefore(a,d):l.head.appendChild(a)}},A=(r,e)=>{let{globals:t,parameters:n}=e,a=t[p]?.value,i=n[p],d=f(()=>i.disable?"transparent":S(a,i.values,i.default),[i,a]),o=f(()=>d&&d!=="transparent",[d]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>{let g="transition: background-color 0.3s;";return`
      ${s} {
        background: ${d} !important;
        ${B()?"":g}
      }
    `},[d,s]);return y(()=>{let g=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!o){v(g);return}w(g,u,e.viewMode==="docs"?e.id:null)},[o,u,e]),r()},L=(r,e)=>{let{globals:t,parameters:n}=e,a=n[p].grid,i=t[p]?.grid===!0&&a.disable!==!0,{cellAmount:d,cellSize:o,opacity:s}=a,u=e.viewMode==="docs",g=n.layout===void 0||n.layout==="padded"?16:0,c=a.offsetX??(u?20:g),m=a.offsetY??(u?20:g),$=f(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",k=[`${o*d}px ${o*d}px`,`${o*d}px ${o*d}px`,`${o}px ${o}px`,`${o}px ${o}px`].join(", ");return`
      ${b} {
        background-size: ${k} !important;
        background-position: ${c}px ${m}px, ${c}px ${m}px, ${c}px ${m}px, ${c}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[o]);return y(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){v(b);return}O(b,$)},[i,$,e]),r()},C=[L,A],I={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},R={[p]:null};export{C as decorators,R as globals,I as parameters};
