if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>i(e,c),d={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-fa76e3b6.css",revision:null},{url:"index.html",revision:"3e3a88072a79820d32578900251cdd67"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"styles.css",revision:"22808aa9ddac6c0183191614b7953e5f"},{url:"pwa-64x64.png",revision:"bb08d4ffe204a919b06960e1a96caea7"},{url:"pwa-192x192.png",revision:"3b1e4bbecc729dd5ba5c67eb273f91ee"},{url:"pwa-512x512.png",revision:"9e98c5c9167e3577609ac44b27c5be45"},{url:"manifest.webmanifest",revision:"1123cccfccba50daabe98ea77d27eb56"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/api/]}))}));
