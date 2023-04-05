(function(){"use strict";var e={8565:function(e,t,r){var l=r(9242),n=r(3396),i=r(7139),o=r.p+"Zer075/main/img/logo.950ece5c.jpeg";const a={class:"text-bg-dark"},s={class:"col-6 offset-3"},c=(0,n._)("div",{class:"col-4 offset-4 pt-5"},[(0,n._)("img",{alt:"Logo",class:"img-fluid",src:o})],-1),u={class:"mb-3"},f=(0,n._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Valor: ",-1),h={class:"col-12"},m=(0,n._)("label",{class:"form-label"},"Número de parcelas: ",-1),p={class:"text-center"},v={class:"form-check form-switch"},b={key:0,class:"form-check-label"},d={key:1,class:"form-check-label"},w={class:"jumbotron"},g=(0,n._)("h1",{class:"display-4"},"Detalhes da simulação",-1),_={class:"lead"},y={class:"lead"},k=(0,n._)("hr",{class:"my-4"},null,-1),C={class:"lead"},x=(0,n._)("br",null,null,-1),O=(0,n._)("br",null,null,-1),z=(0,n._)("br",null,null,-1),j=(0,n._)("br",null,null,-1),R=(0,n._)("br",null,null,-1);function V(e,t,r,o,V,$){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",s,[c,(0,n._)("div",u,[f,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t),onChange:t[1]||(t[1]=e=>$.process())},null,544),[[l.nr,e.value]])]),(0,n._)("div",h,[m,(0,n.wy)((0,n._)("input",{type:"range",class:"form-range",min:"1",max:"18","onUpdate:modelValue":t[2]||(t[2]=t=>e.term=t),onChange:t[3]||(t[3]=e=>$.process())},null,544),[[l.nr,e.term]]),(0,n._)("h2",p,(0,i.zw)(e.term),1)]),(0,n._)("div",v,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":t[4]||(t[4]=t=>e.limit=t),onChange:t[5]||(t[5]=e=>$.process())},null,544),[[l.e8,e.limit]]),e.limit?((0,n.wg)(),(0,n.iD)("label",b,"Calcular a partir do limite")):(0,n.kq)("",!0),e.limit?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("label",d,"Calcular valor à receber"))]),(0,n._)("div",w,[g,(0,n._)("p",_,"Será cobrado no cartão: "+(0,i.zw)(this.result.willCharge),1),(0,n._)("p",y,"Você receberá: "+(0,i.zw)(this.result.willReceive),1),k,(0,n._)("p",null,"Ser"+(0,i.zw)(e.term>1?"ão":"á")+" "+(0,i.zw)(e.term)+" parcela"+(0,i.zw)(e.term>1?"s":"")+" de "+(0,i.zw)(e.result.portion),1)]),(0,n._)("p",C,[(0,n._)("a",{class:"btn btn-outline-primary btn-lg",role:"button",onClick:t[6]||(t[6]=(...e)=>$.copy&&$.copy(...e))},"Copiar")])]),x,O,z,j,R])}var $={name:"App",data:function(){return{rates:{receivable:[0,1.10799,1.10922,1.10984,1.11045,1.111,1.11178,1.1128,1.11238,1.11268,1.11298,1.11348,1.11398,1.117,1.1175,1.118,1.1185,1.119,1.12],limit:[0,1.074,1.0845,1.0896,1.0947,1.0991,1.1055,1.1079,1.1102,1.1126,1.115,1.1188,1.1227,1.1451,1.149,1.153,1.156,1.16,1.168]},value:1e3,term:1,limit:!1,result:{willCharge:0,willReceive:0,portion:0}}},mounted(){this.process()},methods:{process:function(){this.limit?this.result={willCharge:this.formatter(this.value),willReceive:this.formatter(this.value/this.rates.limit[this.term]),portion:this.formatter(this.value/this.term)}:this.result={willCharge:this.formatter(this.value*this.rates.receivable[this.term]),willReceive:this.formatter(this.value),portion:this.formatter(this.value*this.rates.receivable[this.term]/this.term)}},formatter:function(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},copy:function(){let e=`\n            Será cobrado no cartão: ${this.result.willCharge}.\n            Você receberá: ${this.result.willReceive}.\n            Ser${this.term>1?"ão":"á"} ${this.term} parcela${this.term>1?"s":""} de ${this.result.portion}`;navigator.clipboard.writeText(e)}}},S=r(89);const D=(0,S.Z)($,[["render",V]]);var L=D;r(3455);(0,l.ri)(L).mount("#app")}},t={};function r(l){var n=t[l];if(void 0!==n)return n.exports;var i=t[l]={exports:{}};return e[l].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,l,n,i){if(!l){var o=1/0;for(u=0;u<e.length;u++){l=e[u][0],n=e[u][1],i=e[u][2];for(var a=!0,s=0;s<l.length;s++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](l[s])}))?l.splice(s--,1):(a=!1,i<o&&(o=i));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[l,n,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,i,o=l[0],a=l[1],s=l[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(s)var u=s(r)}for(t&&t(l);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},l=self["webpackChunkzero75"]=self["webpackChunkzero75"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=r.O(void 0,[998],(function(){return r(8565)}));l=r.O(l)})();
//# sourceMappingURL=app.3f510981.js.map
