"use strict";(self["webpackChunkdimfen"]=self["webpackChunkdimfen"]||[]).push([[323],{7323:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var a=t(3673),o=t(2323);const s={class:"flex flex-center"},r=(0,a._)("div",{class:"text-h6"},"錢包餘額",-1);function c(e,n,t,c,l,d){const u=(0,a.up)("q-card-section"),i=(0,a.up)("q-separator"),m=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(m,{bordered:"",class:"bg-grey-9 my-card",style:{"margin-top":"2em"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(i,{inset:""}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.Money),1)])),_:1})])),_:1})])}const l=(0,a.aZ)({data(){return{Money:0}},name:"PageIndex",mounted(){this.$axios.get("Wallet/1").then((e=>{console.log(e),this.Money=e.data.money})).catch((e=>console.log(e)))}});var d=t(4260),u=t(151),i=t(5589),m=t(5869),f=t(7518),p=t.n(f);const g=(0,d.Z)(l,[["render",c]]),h=g;p()(l,"components",{QCard:u.Z,QCardSection:i.Z,QSeparator:m.Z})}}]);