!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hollysysMircoFrontEndFramework=t():e.hollysysMircoFrontEndFramework=t()}(self,(function(){return(()=>{"use strict";var e={265:(e,t,r)=>{r.r(t),r.d(t,{AbstractHollysysMircoFrontEndApp:()=>o,HollysysMircoFrontEndApp:()=>n,HollysysMircoFrontEndAppManager:()=>i});class o{constructor(e,t){Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"mountTo",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e,this.mountTo=t}getName(){return this.name}getMountTo(){return this.mountTo}}Object.defineProperty(o,"orgName",{enumerable:!0,configurable:!0,writable:!0,value:"@hollysys"});class n{constructor(e){Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pathPrefix",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"beforeInstall",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"install",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"uninstall",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"beforeUninstall",{enumerable:!0,configurable:!0,writable:!0,value:void 0});let{name:t,beforeInstall:r,install:o,uninstall:n,beforeUninstall:i,pathPrefix:a}=e;this.name=t,this.pathPrefix=a,this.beforeInstall=r,this.install=o,this.uninstall=n,this.beforeUninstall=i}getName(){return this.name}getPathPrefix(){return this.pathPrefix}}class i{static registerApps(e){this.appsConfig=e}static getAppsConfig(){return this.appsConfig}static async installApp(e){await e.beforeInstall(),await e.install({mountTo:this.appMountTo,props:{a:1}})}static uninstallApp(e){}}Object.defineProperty(i,"appsConfig",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(i,"appMountTo",{enumerable:!0,configurable:!0,writable:!0,value:"#mountTo"})}},t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}return r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(265)})()}));