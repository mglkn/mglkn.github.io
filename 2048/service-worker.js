if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return f[e]||(r=new Promise(async r=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=r}else importScripts(e),r()})),r.then(()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]})},r=(r,f)=>{Promise.all(r.map(e)).then(e=>f(1===e.length?e[0]:e))},f={require:Promise.resolve(r)};self.define=(r,i,s)=>{f[r]||(f[r]=Promise.resolve().then(()=>{let f={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return f;case"module":return c;default:return e(r)}})).then(e=>{const r=s(...e);return f.default||(f.default=r),f})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app.314f8f08.css",revision:"02771ff7c4bf869289d8424ee6efcc04"},{url:"app.314f8f08.css.gz",revision:"dd46dbb7706621e7f1a9d6619c33b4f1"},{url:"app.314f8f08.js",revision:"411107968d7cfea09d757fbf67285e92"},{url:"app.314f8f08.js.gz",revision:"2965cc8e2fb2ca6fb21af1e0cad46b8c"},{url:"favicon.ico",revision:"4d619bf2fb6d4af7907f4dabd1fccfde"},{url:"index.html",revision:"599a622d84cb2d6e09ca2f12ad042232"},{url:"runtime.314f8f08.js",revision:"33e84119f236515b086c4fa7ba88cc88"},{url:"runtime.314f8f08.js.gz",revision:"5ddc2a7975e214f3a982d01697c3c50a"},{url:"vendors.314f8f08.js",revision:"bca93afca9b576a2e6d26f52ec648ebc"},{url:"vendors.314f8f08.js.gz",revision:"a6c4cfd58bff46cc8aabee15b30818b6"}],{})}));
