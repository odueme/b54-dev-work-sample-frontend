"use strict";(globalThis["webpackChunkb54_work_sample"]=globalThis["webpackChunkb54_work_sample"]||[]).push([[445],{1445:(t,a,s)=>{s.r(a),s.d(a,{default:()=>U});var e=s(9835),n=s(1957);const o={class:"p-3 text-bg-dark"},l={class:"container"},r={class:"d-flex align-items-start justify-content-start justify-content-lg-start"},i={class:"nav nav-pills nav-fill col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0"},c={class:"form-signin w-100 m-auto"},u=(0,e._)("h1",{class:"h3 mb-3 fw-normal"},"Please sign in",-1),d={class:"form-floating"},m=(0,e._)("label",{for:"floatingInput"},"Username",-1),p={class:"form-floating"},g=(0,e._)("label",{for:"floatingPassword"},"Password",-1),h=(0,e._)("div",{class:"checkbox mb-3"},null,-1),w=(0,e._)("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"},"Sign in",-1),f={class:"mt-3"},_={key:0,class:"alert alert-danger mt-4",role:"alert"};function b(t,a,s,b,v,k){const y=(0,e.up)("router-link"),P=(0,e.up)("svg-icon");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("header",o,[(0,e._)("div",l,[(0,e._)("div",r,[(0,e._)("ul",i,[(0,e._)("li",null,[(0,e.Wm)(y,{to:"/",class:"nav-link text-white",exact:"","active-class":"router-link-active"},{default:(0,e.w5)((()=>[(0,e.Uk)("Login")])),_:1})])]),(0,e.Wm)(P,{type:"mdi",path:t.path,class:"my-2 align-self-end"},null,8,["path"])])])]),(0,e._)("main",c,[(0,e._)("form",{onSubmit:a[2]||(a[2]=(0,n.iM)(((...t)=>b.submit&&b.submit(...t)),["prevent"]))},[u,(0,e._)("div",d,[(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>b.data.username=t),type:"name",class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[n.nr,b.data.username]]),m]),(0,e._)("div",p,[(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>b.data.password=t),type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password",value:""},null,512),[[n.nr,b.data.password]]),g]),h,w,(0,e._)("p",f,[(0,e.Uk)("Don't have an account? Register "),(0,e.Wm)(y,{to:"/signup"},{default:(0,e.w5)((()=>[(0,e.Uk)("Here")])),_:1})]),t.$store.state.showMessage?((0,e.wg)(),(0,e.iD)("div",_," Wrong username or password! ")):(0,e.kq)("",!0)],32)])])}s(9665);var v=s(499),k=s(8339),y=s(3100);let P="";const S={name:"LoginPage",setup(){const t=(0,y.oR)(),a=(0,v.qj)({username:"",password:""});console.log(a);const s=(0,k.tv)(),e=async()=>{await fetch("https://dev-work-sample-2k3t.onrender.com/api/v1/auth/login",{method:"POST",headers:{"Content-type":"application/json"},credentials:"include",body:JSON.stringify(a)}).then((e=>(e.ok?(t.dispatch("setAuth",!0),t.dispatch("setShowMessage",!1),console.log(a.email),s.push("/home")):(t.dispatch("setShowMessage",!0),t.dispatch("setAuth",!1),console.log("unauthorized")),e.json()))).then((t=>{console.log(t.access_token);let a=t.access_token;localStorage.setItem("user",a)})).catch((t=>{throw t}))};return{token:P,data:a,submit:e}}};var j=s(1639);const x=(0,j.Z)(S,[["render",b]]),U=x}}]);