import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as i,i as l}from"./assets/vendor-77e16229.js";const t={inputEl:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};t.startBtn.disabled=!0;let s,n;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),n=e[0],n<new Date?(l.show({title:"Error",message:"Please choose a date in the future"}),t.startBtn.disabled=!0):t.startBtn.disabled=!1}};i("#datetime-picker",m);t.startBtn.addEventListener("click",()=>{s=setInterval(()=>{const e=n-Date.now(),o=r(e);t.startBtn.disabled=!0,t.inputEl.disabled=!0,t.days.textContent=o.days.toString().padStart(2,"0"),t.hours.textContent=o.hours.toString().padStart(2,"0"),t.minutes.textContent=o.minutes.toString().padStart(2,"0"),t.seconds.textContent=o.seconds.toString().padStart(2,"0")},1e3),setTimeout(()=>{clearInterval(s)},n-Date.now())});function r(e){const a=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:d,minutes:c,seconds:u}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=commonHelpers.js.map
