(()=>{const e=document.getElementById("app"),t=document.getElementById("observe");window.localStorage.setItem("pagination",0);const o=new IntersectionObserver((n=>{n.forEach((n=>{n.isIntersecting&&(async()=>{const n=parseInt(window.localStorage.getItem("pagination"));if(window.localStorage.setItem("pagination",n+10),await(async t=>{const o=parseInt(window.localStorage.getItem("pagination"));try{const t=await fetch("https://api.escuelajs.co/api/v1/products");let n=(await t.json()).filter((e=>e.id>5)).slice(o,o+10).map((e=>`<article class="Card"><img src="${e.images}" alt=""><h2>${e.title}</h2></article>`));const a=document.createElement("section");a.classList.add("Items"),a.innerHTML=n.join(""),e.appendChild(a)}catch(e){console.log(e)}})(),180===document.querySelectorAll(".Card").length){const n=document.createElement("div");n.textContent="Todos los productos Obtenidos",n.style.fontSize="20px",e.appendChild(n),o.unobserve(t)}})()}))}),{rootMargin:"0px 0px 100% 0px"});o.observe(t),window.addEventListener("beforeunload",(()=>{localStorage.removeItem("pagination")}))})();