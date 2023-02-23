!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();class e{constructor({canvasId:e,sequenceJSON:r,sequenceIMG:t,time:i,onFinish:o,prefixName:s}){this.sequenceIndex=0,this.frames=[],this.index=0,this.playState="PENDING",this.prefixName="",this.time=i,this.canvas=document.getElementById(e),this.context=this.canvas.getContext("2d"),this.onFinish=o,this.prefixName=s,this.initPlayer(r,t)}initPlayer(e,r){let{frames:t}=e;this.sequenceIndex=Object.keys(t).length;for(var i=0;i<this.sequenceIndex;i++){const e=t[`${this.prefixName}${i}.png`],o=document.createElement("canvas");o.width=e.sourceSize.w,o.height=e.sourceSize.h;o.getContext("2d").drawImage(r,e.frame.x,e.frame.y,e.frame.w,e.frame.h,e.spriteSourceSize.x,e.spriteSourceSize.y,e.spriteSourceSize.w,e.spriteSourceSize.h),this.frames.push(o)}}drawImage(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.frames[this.index],0,0,this.canvas.width,this.canvas.height)}handleDraw(){this.drawImage(),this.inter=setTimeout((()=>{this.index>=this.frames.length-1?this.handleEnd():(this.index+=1,this.handleDraw())}),this.time/this.sequenceIndex)}start(){return this.index=0,this.continue()}pause(){return clearTimeout(this.inter),this.playState="PAUSED",!0}continue(){return"PLAYING"!==this.playState&&(this.playState="PLAYING",this.handleDraw()),!0}handleEnd(){this.playState="FINISHED","function"==typeof this.onFinish&&this.onFinish()}stop(){return this.pause(),this.inter=null,this.index=0,this.playState="STOP",!0}}const r={meta:{image:"spritesheet.png",size:{w:5250,h:4250},scale:"1"},frames:{"red_0.png":{frame:{x:0,y:0,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_1.png":{frame:{x:750,y:0,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_10.png":{frame:{x:1500,y:0,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_11.png":{frame:{x:0,y:850,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_12.png":{frame:{x:750,y:850,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_13.png":{frame:{x:1500,y:850,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_14.png":{frame:{x:2250,y:0,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_15.png":{frame:{x:2250,y:850,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_16.png":{frame:{x:0,y:1700,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_17.png":{frame:{x:750,y:1700,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_18.png":{frame:{x:1500,y:1700,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_19.png":{frame:{x:2250,y:1700,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_2.png":{frame:{x:3e3,y:0,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_20.png":{frame:{x:3e3,y:850,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_21.png":{frame:{x:3e3,y:1700,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_22.png":{frame:{x:0,y:2550,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_23.png":{frame:{x:750,y:2550,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_24.png":{frame:{x:1500,y:2550,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_25.png":{frame:{x:2250,y:2550,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_26.png":{frame:{x:3e3,y:2550,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_27.png":{frame:{x:3750,y:0,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_28.png":{frame:{x:3750,y:850,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_29.png":{frame:{x:3750,y:1700,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_3.png":{frame:{x:3750,y:2550,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_30.png":{frame:{x:0,y:3400,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_4.png":{frame:{x:750,y:3400,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_5.png":{frame:{x:1500,y:3400,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_6.png":{frame:{x:2250,y:3400,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_7.png":{frame:{x:3e3,y:3400,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_8.png":{frame:{x:3750,y:3400,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}},"red_9.png":{frame:{x:4500,y:0,w:750,h:850},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:750,h:850},sourceSize:{w:750,h:850}}}},t=""+new URL("spritesheet-d1b934e9.png",import.meta.url).href,i={meta:{image:"spritesheet.png",size:{w:2040,h:1888},scale:"1"},frames:{"Walk0.png":{frame:{x:0,y:0,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}},"Walk1.png":{frame:{x:680,y:0,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}},"Walk2.png":{frame:{x:0,y:472,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}},"Walk3.png":{frame:{x:680,y:472,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}},"Walk4.png":{frame:{x:1360,y:0,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}},"Walk5.png":{frame:{x:1360,y:472,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}},"Walk6.png":{frame:{x:0,y:944,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}},"Walk7.png":{frame:{x:680,y:944,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}},"Walk8.png":{frame:{x:1360,y:944,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}},"Walk9.png":{frame:{x:0,y:1416,w:680,h:472},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:680,h:472},sourceSize:{w:680,h:472}}}},o=""+new URL("spritesheet_walk-14e30c7d.png",import.meta.url).href;function s(e){return new Promise(((r,t)=>{const i=new Image;i.src=e,i.addEventListener("load",(()=>{r(i)})),i.addEventListener("error",(e=>{t(e),console.log(e,"<==error")}))}))}const n=document.getElementById("app");n&&(n.innerHTML="<h1>Hello, Click the button to preview the animation</h1>"),function(){let i,o=document.querySelector("#start"),n=document.querySelector("#pause"),a=document.querySelector("#continue"),c=document.querySelector("#stop");s(t).then((t=>{i=new e({canvasId:"sequenceCanvas",sequenceJSON:r,sequenceIMG:t,time:1e3,onFinish:()=>{},prefixName:"red_"})})),null==o||o.addEventListener("click",(function(){console.log("点击开始"),i.start()})),null==n||n.addEventListener("click",(function(){console.log("点击暂停"),i.pause()})),null==a||a.addEventListener("click",(function(){console.log("点击继续"),i.continue()})),null==c||c.addEventListener("click",(function(){console.log("点击结束"),i.stop()}))}(),function(){let r,t=document.querySelector("#start2"),n=document.querySelector("#pause2"),a=document.querySelector("#continue2"),c=document.querySelector("#stop2");s(o).then((t=>{r=new e({canvasId:"sequenceCanvas2",sequenceJSON:i,sequenceIMG:t,time:1e3,onFinish:()=>{r.start()},prefixName:"Walk"})})),null==t||t.addEventListener("click",(function(){console.log("点击开始"),r.start()})),null==n||n.addEventListener("click",(function(){console.log("点击暂停"),r.pause()})),null==a||a.addEventListener("click",(function(){console.log("点击继续"),r.continue()})),null==c||c.addEventListener("click",(function(){console.log("点击结束"),r.stop()}))}();