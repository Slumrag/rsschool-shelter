"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[826],{175:(e,t,c)=>{function r(){var e=document.querySelector(".header__burger"),t=document.querySelector(".header__menu"),c=document.querySelector(".header__content"),r=(document.querySelector(".header"),window.matchMedia("screen and (max-width:767px)")),n=[e,t,c];function o(){n.forEach((function(e){return e.classList.remove("_active")})),document.body.classList.remove("_scroll-lock")}document.addEventListener("click",(function(e){e.target.closest(".header__burger")&&(n.forEach((function(e){return e.classList.toggle("_active")})),document.body.classList.toggle("_scroll-lock")),e.target.closest("._active")&&e.target===c&&o()})),r.addEventListener("change",o)}c.d(t,{Z:()=>r})}},e=>{e(e.s=175)}]);