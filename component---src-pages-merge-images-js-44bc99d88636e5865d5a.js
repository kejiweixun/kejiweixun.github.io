(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9/5/":function(e,t,i){(function(t){var i=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,o="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=o||c||Function("return this")(),h=Object.prototype.toString,b=Math.max,d=Math.min,s=function(){return u.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==h.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=a.test(e);return o||r.test(e)?l(e.slice(2),o?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,i){var n,a,r,l,o,c,u=0,h=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function j(t){var i=n,r=a;return n=a=void 0,u=t,l=e.apply(r,i)}function O(e){return u=e,o=setTimeout(y,t),h?j(e):l}function w(e){var i=e-c;return void 0===c||i>=t||i<0||p&&e-u>=r}function y(){var e=s();if(w(e))return v(e);o=setTimeout(y,function(e){var i=t-(e-c);return p?d(i,r-(e-u)):i}(e))}function v(e){return o=void 0,f&&n?j(e):(n=a=void 0,l)}function x(){var e=s(),i=w(e);if(n=arguments,a=this,c=e,i){if(void 0===o)return O(c);if(p)return o=setTimeout(y,t),j(c)}return void 0===o&&(o=setTimeout(y,t)),l}return t=m(t)||0,g(i)&&(h=!!i.leading,r=(p="maxWait"in i)?b(m(i.maxWait)||0,t):r,f="trailing"in i?!!i.trailing:f),x.cancel=function(){void 0!==o&&clearTimeout(o),u=0,n=c=a=o=void 0},x.flush=function(){return void 0===o?l:v(s())},x}}).call(this,i("yLpj"))},mhLB:function(e,t,i){"use strict";i.r(t);var n=i("o0o1"),a=i.n(n),r=(i("ls82"),i("HaE+")),l=i("KQm4"),o=(i("nKUr"),i("q1tI")),c=i.n(o),u=i("XuZe"),h=i("qKvR"),b=i("qhky"),d=i("ctKR"),s=i("tBpk"),g=i.n(s),m=i("9/5/"),p=i.n(m);function f(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=e[Symbol.iterator]()).next.bind(i)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var O={name:"k4moad",styles:"font-size:clamp(1.3rem,1vw + 1.3rem,1.8rem);text-align:center;margin:1em 0;"},w={name:"191ucjc",styles:".form-radio{display:grid;grid-template-columns:repeat(auto-fill,minmax(7em,1fr));grid-gap:0.2em;p{font-size:1.2rem;font-weight:bold;margin-bottom:0.5em;grid-column:1 / -1;}label input{margin-right:0.4em;}}.form-slider{p{font-size:1.2rem;font-weight:bold;margin-bottom:0.5em;}label{vertical-align:middle;}input{width:80%;max-width:300px;margin-right:0.5em;}}.form-text-input{p{font-size:1.2rem;font-weight:bold;margin-bottom:0.5em;}input{font-size:1rem;padding:0.1em 0.2em;width:100%;max-width:300px;}}.form-color{p{font-size:1.2rem;font-weight:bold;margin-bottom:0.5em;}input{margin-right:0.8em;}}"},y={name:"1ngbrrh",styles:"display:grid;grid-template-columns:min-content auto;grid-gap:0.5em;span{display:flex;span{display:block;width:1em;height:1em;border:0.1em solid currentColor;border-radius:50%;color:rgb(27,178,10);}input{width:0px;height:0px;opacity:0;position:absolute;}input:checked + span{background:radial-gradient(currentcolor 50%,rgba(255,0,0,0) 51%);}input:focus + span{box-shadow:0 0 0 0.05em #fff,0 0 0.15em 0.1em currentColor;}input[disabled] + span{border:0.1em solid grey;background:radial-gradient(grey 50%,rgba(255,0,0,0) 51%);}}span{line-height:1;}"},v={name:"u4fqba",styles:"margin:2em 0;display:grid;grid-template-columns:repeat(auto-fit,3em);grid-gap:15px;div{display:flex;flex-direction:row-reverse;width:3em;height:3em;}.image-thumbnail{object-fit:cover;width:3em;height:3em;box-shadow:0 0 3px grey;}.delete-icon{width:1em;height:1em;position:absolute;transform:translate(0.5em,-0.5em);}"},x={name:"11tsqzh",styles:"display:grid;grid-template-columns:1fr 1fr;margin:30px 0;place-items:center;font-weight:bold;.chooseImageBtn{label input{width:0;height:0;opacity:0;position:absolute;}label span{cursor:pointer;}}.saveImageBtn a{text-decoration:none;color:black;}.button{font-size:1.3rem;background-color:lightcyan;padding:0.2em 0.4em;border:1px solid grey;border-radius:0.2em;box-shadow:0 0 3px grey;:active{background-color:wheat;}}"},M={name:"1sd4pf4",styles:"width:100%;max-height:1000px;overflow:scroll;padding:5px;display:flex;"},C={name:"1j6374",styles:"display:block;box-shadow:0 0 3px grey;margin:auto;"},k={name:"1hi0vz2",styles:"margin:5px 0 50px 0;text-align:center;"};t.default=function(){var e=Object(o.useState)([]),t=e[0],i=e[1],n=Object(o.useState)([]),s=n[0],m=n[1],j=Object(o.useState)({direction:"vertical",widthSetting:"equalWidth",alignVertical:"alignCenterVertical",heightSetting:"equalHeight",alignHorizontal:"alignCenterHorizontal",watermark:"",watermarkColor:"#e66465",backgroundColor:"#ffffff",margin:10,opacity:.3,fontSize:50}),N=j[0],I=j[1],E=Object(o.useState)(N.margin),T=E[0],z=E[1],q=Object(o.useState)(N.opacity),S=q[0],L=q[1],H=Object(o.useState)(N.fontSize),W=H[0],A=H[1],D=Object(o.useState)(N.watermarkColor),F=D[0],B=D[1],R=Object(o.useState)({width:0,height:0}),Q=R[0],U=R[1],J="";function V(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(r.a)(a.a.mark((function e(t){var i,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(e){return new Promise((function(t,i){var n=document.createElement("canvas"),a=n.getContext("2d");n.width=100,n.height=100;var r=Math.min(e.height,e.width),l=Math.min(e.height,e.width),o=new Image;o.src=e.url,o.onload=function(){a.fillStyle="white",a.fillRect(0,0,100,100),a.drawImage(o,0,0,r,l,0,0,100,100);var c=n.toDataURL("image/jpeg");t({dataURL:c,url:e.url}),i("get thumbnail 出错")}}))},n=t.map((function(e){return i(e)})),e.next=5,Promise.all(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3===(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),"rgba("+[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t].join(",")+",1)";throw new Error("Bad Hex")}Object(o.useEffect)((function(){Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,V(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[t]),Object(o.useEffect)((function(){var e=document.getElementById("canvas");t.length?(!function(e,t){var i=window.devicePixelRatio,n=t.direction,o=t.widthSetting,c=t.alignVertical,u=t.heightSetting,h=t.alignHorizontal,b=t.watermark,d=t.watermarkColor,s=t.backgroundColor,g=t.margin,m=t.opacity,p=t.fontSize,j=document.getElementById("canvas"),O=j.getContext("2d"),w=e.map((function(e){var t,i,n=(t=e.width,i=e.height,e.width>e.height&&e.height>2e3&&(i=2e3,t=e.width/e.height*2e3),e.height>e.width&&e.width>2e3&&(t=2e3,i=e.height/e.width*2e3),{width:t,height:i});return{url:e.url,width:e.width,height:e.height,widthCompressed:n.width,heightCompressed:n.height}})),y=Math.max.apply(Math,Object(l.a)(w.map((function(e){return e.widthCompressed})))),v=Math.max.apply(Math,Object(l.a)(w.map((function(e){return e.heightCompressed})))),x=w.map((function(e){var t=e.widthCompressed,i=e.heightCompressed,a=e.heightCompressed,r=e.widthCompressed;return"vertical"===n&&"equalWidth"===o?(t=y,i=e.height/e.width*t):"horizontal"===n&&"equalHeight"===u&&(a=v,r=e.width/e.height*a),{url:e.url,width:e.width,height:e.height,widthEqual:t,heightWhenWidthEqual:Math.round(i),heightEqual:a,widthWhenHeightEqual:Math.round(r)}})),M=x.reduce((function(e,t){return e+t.widthWhenHeightEqual}),0)+g*(x.length-1),C=x.reduce((function(e,t){return e+t.heightWhenWidthEqual}),0)+g*(x.length-1);"vertical"===n?(j.width=y,j.height=C,Math.round(y/i)>600?(j.style.width="600px",j.style.height=j.height/j.width*600+"px"):(j.style.width=Math.round(y/i)+"px",j.style.height=j.height/j.width*Math.round(y/i)+"px")):(j.width=M,j.height=v,Math.round(v/i)>800?(j.style.height="800px",j.style.width=j.width/j.height*800+"px"):(j.style.height=Math.round(v/i)+"px",j.style.width=j.width/j.height*Math.round(v/i)+"px")),U({width:j.width,height:j.height}),O.save(),O.fillStyle=s,O.fillRect(0,0,j.width,j.height),O.restore();for(var k,N=function(e,t,i,n,l,o,c,u,h,s){var g=new Image;g.src=e.url,g.onload=Object(r.a)(a.a.mark((function e(){var r,f,w,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.drawImage(g,t,i,n,l,o,c,u,h),s===x.length-1&&b&&x.length){for(O.save(),O.fillStyle=P(d).replace(/,1\)/g,","+m+")"),O.textAlign="center",O.textBaseline="middle",O.font=p+"px serif",O.translate(Math.round(j.width/2),Math.round(j.height/2)),O.rotate(45*Math.PI/180),r=Math.sqrt(j.width/2*j.width/2+j.height/2*j.height/2),f=O.measureText(b).width,w=0;w<r;w=w+1*f+2*p)for(y=0;y<r;y+=3*p)0===w&&0===y?O.fillText(b,w,y,r):0===w&&0!==y?(O.fillText(b,w,y,r),O.fillText(b,w,-y,r)):0!==w&&0===y?(O.fillText(b,w,y,r),O.fillText(b,-w,y,r)):(O.fillText(b,w,y,r),O.fillText(b,-w,y,r),O.fillText(b,w,-y,r),O.fillText(b,-w,-y,r));O.restore()}case 2:case"end":return e.stop()}}),e)})))},I=f(x.entries());!(k=I()).done;){var E=k.value,T=E[0],z=E[1],q=z.width,S=z.height;if("vertical"===n){if("equalWidth"===o){N(z,0,0,q,S,0,x.slice(0,T).reduce((function(e,t){return e+t.heightWhenWidthEqual}),0)+g*T,z.widthEqual,z.heightWhenWidthEqual,T)}else if("alignLeft"===c){N(z,0,0,q,S,0,x.slice(0,T).reduce((function(e,t){return e+t.heightEqual}),0)+g*T,z.widthEqual,z.heightWhenWidthEqual,T)}else if("alignCenterVertical"===c){N(z,0,0,q,S,Math.round((y-z.widthEqual)/2),x.slice(0,T).reduce((function(e,t){return e+t.heightEqual}),0)+g*T,z.widthEqual,z.heightWhenWidthEqual,T)}else if("alignRight"===c){N(z,0,0,q,S,y-z.widthEqual,x.slice(0,T).reduce((function(e,t){return e+t.heightEqual}),0)+g*T,z.widthEqual,z.heightWhenWidthEqual,T)}}else if("equalHeight"===u){N(z,0,0,q,S,x.slice(0,T).reduce((function(e,t){return e+t.widthWhenHeightEqual}),0)+g*T,0,z.widthWhenHeightEqual,z.heightEqual,T)}else if("alignTop"===h){N(z,0,0,q,S,x.slice(0,T).reduce((function(e,t){return e+t.widthEqual}),0)+g*T,0,z.widthWhenHeightEqual,z.heightEqual,T)}else if("alignCenterHorizontal"===h){var L=Math.round((v-z.heightEqual)/2);N(z,0,0,q,S,x.slice(0,T).reduce((function(e,t){return e+t.widthEqual}),0)+g*T,L,z.widthWhenHeightEqual,z.heightEqual,T)}else if("alignBottom"===h){var H=v-z.heightEqual;N(z,0,0,q,S,x.slice(0,T).reduce((function(e,t){return e+t.widthEqual}),0)+g*T,H,z.widthWhenHeightEqual,z.heightEqual,T)}}}(t,N),e.style.display=""):e.style.display="none"}),[t,N]);var G=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.a)(t.target.files).map((function(e){return URL.createObjectURL(e)})),r=function(e){return new Promise((function(t,i){var n=new Image;n.src=e,n.onload=function(){t({width:+n.width,height:+n.height,url:n.src}),i("出错")}}))},e.next=4,Promise.all(n.map((function(e){return r(e)})));case 4:o=e.sent,i(o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(e){var n=e.target.dataset.index,a=JSON.parse(JSON.stringify(t));a.splice(n,1),i(a)},Z=function(e){J=e.target},K=function(e){var n=e.target;if(n.style.border="none",n.src!==J.src){var a=JSON.parse(JSON.stringify(t)),r=s.filter((function(e){return e.dataURL===n.src}))[0].url,l=s.filter((function(e){return e.dataURL===J.src}))[0].url,o=a.map((function(e){return e.url})).indexOf(r),c=a.map((function(e){return e.url})).indexOf(l),u=a[o];a[o]=a[c],a[c]=u,i(a)}},X=function(e){e.preventDefault()},_=function(e){e.target.style.border="1px solid red"},ee=function(e){e.target.style.border="none"},te=function(e){var t=e.target.name,i=e.target.value;if(!["margin","fontSize","opacity"].includes(t)){var n=JSON.parse(JSON.stringify(N));n[t]=i,I(n)}},ie=Object(o.useCallback)(p()((function(e){var t=e.target.value,i=e.target.name,n=JSON.parse(JSON.stringify(N));n[i]=t,I(n)}),250),[N]),ne=function(e){e.persist();var t=e.target.value;switch(e.target.name){case"margin":z(t);break;case"fontSize":A(t);break;case"opacity":L(t);break;case"watermarkColor":B(t)}ie(e)},ae=Object(o.useCallback)(p()(te,250),[N]);return Object(h.b)(u.a,null,Object(h.b)(b.a,null,Object(h.b)("title",null,"图片拼接 | 长图拼接 | 拼长图"),Object(h.b)("meta",{name:"description",content:"图片拼接, 把多张图片合并成一张, 支持纵向或横向拼接, 可以把多张图片拼接成一张长图片, 还能添加水印."})),Object(h.b)("h1",{css:O},"图片拼接"),Object(h.b)("p",null,"图片拼接, 把多张图片合并成一张, 支持纵向或横向拼接, 可以把多张图片拼接成一张长图片, 还能添加水印. 该工具完全离线运行, 没有联网的功能, 充分保护你的隐私, 手机建议使用对应的",Object(h.b)("b",null,"微信小程序「拼长图」"),"."),Object(h.b)("section",null,Object(h.b)("form",{css:w},Object(h.b)("div",{className:"form-radio"},Object(h.b)("p",null,"拼接方向："),Object(h.b)("label",{htmlFor:"vertical",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"vertical",name:"direction",value:"vertical",checked:"vertical"===N.direction,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"纵向拼接")),Object(h.b)("label",{htmlFor:"horizontal",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"horizontal",name:"direction",value:"horizontal",checked:"horizontal"===N.direction,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null," 横向拼接"))),"vertical"===N.direction?Object(h.b)("div",{className:"form-radio"},Object(h.b)("p",null,"宽度设置："),Object(h.b)("label",{htmlFor:"equalWidth",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"equalWidth",name:"widthSetting",value:"equalWidth",checked:"equalWidth"===N.widthSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"等宽")),Object(h.b)("label",{htmlFor:"originalWidth",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"originalWidth",name:"widthSetting",value:"originalWidth",checked:"originalWidth"===N.widthSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"原始宽度"))):Object(h.b)("div",{className:"form-radio"},Object(h.b)("p",null,"高度设置："),Object(h.b)("label",{htmlFor:"equalHeight",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"equalHeight",name:"heightSetting",value:"equalHeight",checked:"equalHeight"===N.heightSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"等高")),Object(h.b)("label",{htmlFor:"originalHeight",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"originalHeight",name:"heightSetting",value:"originalHeight",checked:"originalHeight"===N.heightSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"原始高度"))),"vertical"===N.direction?Object(h.b)("div",{className:"form-radio"},Object(h.b)("p",null,"对齐方式："),Object(h.b)("label",{htmlFor:"alignLeft",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"alignLeft",name:"alignVertical",value:"alignLeft",checked:"alignLeft"===N.alignVertical,disabled:"equalWidth"===N.widthSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"左对齐")),Object(h.b)("label",{htmlFor:"alignCenterVertical",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"alignCenterVertical",name:"alignVertical",value:"alignCenterVertical",checked:"alignCenterVertical"===N.alignVertical,disabled:"equalWidth"===N.widthSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"左右居中")),Object(h.b)("label",{htmlFor:"alignRight",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"alignRight",name:"alignVertical",value:"alignRight",checked:"alignRight"===N.alignVertical,disabled:"equalWidth"===N.widthSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null," 右对齐"))):"horizontal"===N.direction?Object(h.b)("div",{className:"form-radio"},Object(h.b)("p",null,"对齐方式："),Object(h.b)("label",{htmlFor:"alignTop",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"alignTop",name:"alignHorizontal",value:"alignTop",checked:"alignTop"===N.alignHorizontal,disabled:"equalHeight"===N.heightSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"上对齐")),Object(h.b)("label",{htmlFor:"alignCenterHorizontal",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"alignCenterHorizontal",name:"alignHorizontal",value:"alignCenterHorizontal",checked:"alignCenterHorizontal"===N.alignHorizontal,disabled:"equalHeight"===N.heightSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"上下居中")),Object(h.b)("label",{htmlFor:"alignBottom",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"alignBottom",name:"alignHorizontal",value:"alignBottom",checked:"alignBottom"===N.alignHorizontal,disabled:"equalHeight"===N.heightSetting,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"下对齐"))):"",Object(h.b)("div",{className:"form-radio"},Object(h.b)("p",null,"背景颜色："),Object(h.b)("label",{htmlFor:"white",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"white",name:"backgroundColor",value:"#ffffff",checked:"#ffffff"===N.backgroundColor,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"白色")),Object(h.b)("label",{htmlFor:"grey",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"grey",name:"backgroundColor",value:"#808080",checked:"#808080"===N.backgroundColor,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null," 灰色")),Object(h.b)("label",{htmlFor:"black",css:y},Object(h.b)("span",null,Object(h.b)("input",{type:"radio",id:"black",name:"backgroundColor",value:"#000000",checked:"#000000"===N.backgroundColor,onChange:te}),Object(h.b)("span",null)),Object(h.b)("span",null,"黑色"))),Object(h.b)("div",{className:"form-slider"},Object(h.b)("p",null,"图片间距："),Object(h.b)("label",{htmlFor:"margin"},Object(h.b)("input",{type:"range",id:"margin",name:"margin",min:"0",max:"500",value:T,onChange:ne}),T,"px")),Object(h.b)("div",{className:"form-text-input"},Object(h.b)("p",null,"添加水印："),Object(h.b)("input",{type:"text",id:"watermark",name:"watermark",placeholder:"请输入要显示的水印...",value:N.water,onInput:function(e){e.persist(),ae(e)}})),N.watermark?Object(h.b)(c.a.Fragment,null,Object(h.b)("div",{className:"form-color"},Object(h.b)("p",null,"水印颜色："),Object(h.b)("label",{htmlFor:"watermarkColor"},Object(h.b)("input",{type:"color",id:"watermarkColor",name:"watermarkColor",value:F,onChange:ne}),F)),Object(h.b)("div",{className:"form-slider"},Object(h.b)("p",null,"透明度："),Object(h.b)("label",{htmlFor:"opacity"},Object(h.b)("input",{type:"range",id:"opacity",name:"opacity",min:"0",max:"1",step:"0.1",value:S,onChange:ne}),S)),Object(h.b)("div",{className:"form-slider"},Object(h.b)("p",null,"水印大小："),Object(h.b)("label",{htmlFor:"fontSize"},Object(h.b)("input",{type:"range",id:"fontSize",name:"fontSize",min:"1",max:"500",value:W,onChange:ne}),W,"px"))):"")),Object(h.b)("section",null,Object(h.b)("div",{css:x},Object(h.b)("div",{className:"chooseImageBtn button"},Object(h.b)("label",{htmlFor:"input-file"},Object(h.b)("input",{id:"input-file",type:"file",onChange:G,multiple:!0,accept:"image/*",onClick:function(e){e.target.value=null}}),Object(h.b)("span",null,"选择图片"))),Object(h.b)("div",{className:"saveImageBtn button"},Object(h.b)("a",{download:!0,onClick:function(){var e=document.getElementById("canvas"),t=document.getElementById("download");if(0===e.width)t.removeAttribute("href");else{var i=e.toDataURL("image/jpeg");t.href=i}},id:"download",href:"https://kejiweixun.com/merge-images/",role:"button"},"保存图片"))),Object(h.b)("div",{css:v},s.map((function(e,t){return Object(h.b)("div",{key:e.url+Math.random(),draggable:"true",onDragStart:Z,onDrop:K,onDragOver:X,onDragEnter:_,onDragLeave:ee},Object(h.b)("img",{src:e.dataURL,className:"image-thumbnail",alt:"thumbnail"}),Object(h.b)("img",{src:g.a,className:"delete-icon",onClick:$,"data-index":t,alt:"delete icon"}))}))),Object(h.b)("div",{css:M},Object(h.b)("canvas",{id:"canvas",css:C,width:"0px",height:"0px"})),t.length?Object(h.b)("div",{css:k},"分辨率: ",Q.width,"px * ",Q.height,"px"):""),Object(h.b)(d.a,{title:"图片拼接",slug:"merge-images/"}))}},tBpk:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB0PSIxNTk2NzkzNTg0MzU0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ2OTQiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDBDMjI5LjM3NiAwIDAgMjI5LjM3NiAwIDUxMnMyMjkuMzc2IDUxMiA1MTIgNTEyIDUxMi0yMjkuMzc2IDUxMi01MTJTNzk0LjYyNCAwIDUxMiAweiBtMjAyLjI0IDY4My41MmMxMC4yNCAxMC4yNCAxMC4yNCAyNi4xMTIgMCAzNi4zNTJzLTI2LjExMiAxMC4yNC0zNi4zNTIgMGwtMTY3LjkzNi0xNjcuOTM2LTE2Ny40MjQgMTY3LjQyNGMtMTAuMjQgMTAuMjQtMjYuMTEyIDEwLjI0LTM2LjM1MiAwcy0xMC4yNC0yNi4xMTIgMC0zNi4zNTJsMTY3LjQyNC0xNjcuNDI0LTE2OC45Ni0xNjkuOTg0Yy0xMC4yNC0xMC4yNC0xMC4yNC0yNi4xMTIgMC0zNi4zNTJzMjYuMTEyLTEwLjI0IDM2LjM1MiAwbDE2OS40NzIgMTY5LjQ3MiAxNjkuOTg0LTE2OS45ODRjMTAuMjQtMTAuMjQgMjYuMTEyLTEwLjI0IDM2LjM1MiAwczEwLjI0IDI2LjExMiAwIDM2LjM1MmwtMTY5Ljk4NCAxNjkuOTg0IDE2Ny40MjQgMTY4LjQ0OHoiIGZpbGw9IiNDRDI5MkEiIHAtaWQ9IjQ2OTUiPjwvcGF0aD48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-merge-images-js-44bc99d88636e5865d5a.js.map