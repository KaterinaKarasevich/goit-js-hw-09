const e=document.querySelector("[data-start]");console.log(e);const t=document.querySelector("[data-stop]");console.log(t);const o=document.querySelector("body");console.log(o),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),timerId=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=e}),1e3),console.log(timerId),e.setAttribute("disabled",!0)})),t.addEventListener("click",(()=>{e.removeAttribute("disabled"),clearInterval(timerId),alert("The timer has been stoppped!"),t.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.2a31b7b1.js.map