!function(){var e=document.querySelector(".form");console.log(e),e.addEventListener("submit",(function(e){e.preventDefault(),clearTimeout(null);for(var n=e.target.elements,t=n.delay,a=n.step,i=n.amount,c=Number(t.value),l=1;l<=i.value;l+=1)o(l,c).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),c+=Number(a.value)}));function o(e,o){return new Promise((function(n,t){var a=Math.random()>.3;setTimeout((function(){a?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}}();
//# sourceMappingURL=03-promises.e3638848.js.map