const CINE_CATALOG={
  frameworks:[
    'Alpine','Angular','Astro','Babylon.js','Chakra UI','Express','Fastify','GSAP','Hono','HTMX','jQuery','Lit','MobX','Motion','MUI','NestJS','Next.js','Nuxt','Pinia','PixiJS','Qwik','Radix UI','React','React Router','Redux','shadcn/ui','Solid','Stimulus','Svelte','SvelteKit','Tailwind CSS','TanStack Router','Three.js','Vue','XState','Zustand'
  ],
  packages:[
    'react','react-dom','vue','@vue/compiler-sfc','svelte','@angular/core','rxjs','jquery','gsap','motion','three','@babylonjs/core','@babylonjs/loaders','pixi.js','leaflet','maplibre-gl','deck.gl','d3','chart.js','echarts','video.js','hls.js','wavesurfer.js','fabric','paper','roughjs','lit','htmx.org','alpinejs','redux','zustand','xstate','mobx','react-router','next','nuxt','pinia','astro','tailwindcss','@mui/material','@mui/system','@chakra-ui/react','@radix-ui/react-dialog','framer-motion','express','fastify','hono','@nestjs/core','@nestjs/common','three-mesh-ui','@react-three/fiber','@react-three/drei','react-map-gl','mapbox-gl','openlayers','d3-geo','shaka-player','svg.js','svgson','canvg','konva','pixi-viewport','matter-js','cannon-es','ammo.js','colyseus','socket.io-client','axios','ky','zod','ajv'
  ],
  categories:['UI','State','Routing','Server','Motion','3D','Maps','Video','SVG/Canvas','Data','Networking','Design']
};
window.CINE_CATALOG=CINE_CATALOG;

function qs(sel,root=document){return root.querySelector(sel)}
function qsa(sel,root=document){return [...root.querySelectorAll(sel)]}
function setActiveNav(){const p=location.pathname.split('/').pop()||'index.html';qsa('.nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===p))}
function initCatalog(){
 const root=qs('[data-catalog]'); if(!root)return;
 const search=qs('[data-catalog-search]'); const filter=qs('[data-catalog-filter]');
 const items=[...CINE_CATALOG.frameworks.map(x=>({name:x,type:'Framework',category:'Framework'})),...CINE_CATALOG.packages.map(x=>({name:x,type:'Package',category:'Package'}))];
 function render(){const term=(search.value||'').toLowerCase().trim();const kind=filter.value;const out=items.filter(i=>(!term||i.name.toLowerCase().includes(term))&&(!kind||i.type===kind));root.innerHTML=out.map(i=>`<div class="catalog-item"><div><strong>${i.name}</strong><div class="meta mono">${i.type}</div></div><span class="pill">${i.type==='Framework'?'framework':'package'}</span></div>`).join('')||'<div class="card muted">Aucune correspondance.</div>'}
 search.addEventListener('input',render);filter.addEventListener('change',render);render();
}
function initTabs(){qsa('[data-tabs]').forEach(group=>{const buttons=qsa('.tab',group);const panes=group.parentElement.querySelectorAll('[data-tab-pane]');buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const id=btn.dataset.tab;panes.forEach(p=>p.classList.toggle('hidden',p.dataset.tabPane!==id));}))})}
setActiveNav();initCatalog();initTabs();
