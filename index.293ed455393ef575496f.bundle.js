(self.webpackChunk=self.webpackChunk||[]).push([[826],{175:(e,t,a)=>{"use strict";a.d(t,{Yl:()=>s,qY:()=>d,s8:()=>i,tT:()=>r,zz:()=>c});var n=a(805),o=i(a(223));function s(){var e=document.querySelector(".header__logo"),t=document.querySelector(".header__burger"),a=document.querySelector(".header__menu"),n=document.querySelector(".header__content"),o=window.matchMedia("screen and (max-width:767px)"),s=[t,e,a,n];function i(){s.forEach((function(e){return e.classList.remove("_active")})),document.body.classList.remove("_scroll-lock")}document.addEventListener("click",(function(e){e.target.closest(".header__burger")&&(s.forEach((function(e){return e.classList.toggle("_active")})),document.body.classList.toggle("_scroll-lock")),e.target.closest("._active")&&e.target===n&&i()})),o.addEventListener("change",i)}function i(e){var t={};return e.keys().map((function(a,n){t[a.replace("./","")]=e(a)})),t}function r(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function c(e){for(var t,a=e.length;0!=a;){t=Math.floor(Math.random()*a),a--;var n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}function d(e){var t="modal-window",a=document.querySelector(".".concat(t));document.addEventListener("click",(function(e){var s,i;e.target.closest(".card")&&(s=e.target.classList.contains("card")?e.target.id:e.target.parentElement.closest(".card").id,i=n.find((function(e){return e.name.toLowerCase()===s})),a.querySelector(".".concat(t,"__name")).innerText=i.name,a.querySelector(".".concat(t,"__breed")).innerText="".concat(i.type," - ").concat(i.breed),a.querySelector(".".concat(t,"__image")).src=o[i.img],a.querySelector(".".concat(t,"__image")).alt=i.name.toLowerCase(),a.querySelector(".".concat(t,"__description")).innerText=i.description,document.getElementById("age").innerText=" ".concat(i.age),document.getElementById("inoculations").innerText=" ".concat(i.inoculations.join(", ")),document.getElementById("diseases").innerText=" ".concat(i.diseases.join(", ")),document.getElementById("parasites").innerText=" ".concat(i.parasites.join(", ")),a.classList.remove("_display-none")),(e.target.closest(".".concat(t))||e.target.closest(".".concat(t,"__close")))&&a.classList.add("_display-none")}))}},223:(e,t,a)=>{var n={"./pets-charly.png":482,"./pets-freddie.png":106,"./pets-jennifer.png":971,"./pets-katrine.png":456,"./pets-scarlett.png":226,"./pets-sophia.png":662,"./pets-timmy.png":611,"./pets-woody.png":325};function o(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id=223},482:(e,t,a)=>{"use strict";e.exports=a.p+"images/7b1d861eb14b29a60b5d.png"},106:(e,t,a)=>{"use strict";e.exports=a.p+"images/a1ffe8cad4e12f315709.png"},971:(e,t,a)=>{"use strict";e.exports=a.p+"images/61c5e75926d2713cc736.png"},456:(e,t,a)=>{"use strict";e.exports=a.p+"images/ae2f72ce7b0fde78e861.png"},226:(e,t,a)=>{"use strict";e.exports=a.p+"images/0adb0fb9ca1d51274741.png"},662:(e,t,a)=>{"use strict";e.exports=a.p+"images/db3f928da712e22c8687.png"},611:(e,t,a)=>{"use strict";e.exports=a.p+"images/92533370065fe8846ce7.png"},325:(e,t,a)=>{"use strict";e.exports=a.p+"images/4a5693aab35b2a8ca8ac.png"},805:e=>{"use strict";e.exports=JSON.parse('[{"name":"Jennifer","img":"pets-jennifer.png","type":"Dog","breed":"Labrador","description":"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.","age":"2 months","inoculations":["none"],"diseases":["none"],"parasites":["none"]},{"name":"Sophia","img":"pets-sophia.png","type":"Dog","breed":"Shih tzu","description":"Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.","age":"1 month","inoculations":["parvovirus"],"diseases":["none"],"parasites":["none"]},{"name":"Woody","img":"pets-woody.png","type":"Dog","breed":"Golden Retriever","description":"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.","age":"3 years 6 months","inoculations":["adenovirus","distemper"],"diseases":["right back leg mobility reduced"],"parasites":["none"]},{"name":"Scarlett","img":"pets-scarlett.png","type":"Dog","breed":"Jack Russell Terrier","description":"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.","age":"3 months","inoculations":["parainfluenza"],"diseases":["none"],"parasites":["none"]},{"name":"Katrine","img":"pets-katrine.png","type":"Cat","breed":"British Shorthair","description":"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.","age":"6 months","inoculations":["panleukopenia"],"diseases":["none"],"parasites":["none"]},{"name":"Timmy","img":"pets-timmy.png","type":"Cat","breed":"British Shorthair","description":"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.","age":"2 years 3 months","inoculations":["calicivirus","viral rhinotracheitis"],"diseases":["kidney stones"],"parasites":["none"]},{"name":"Freddie","img":"pets-freddie.png","type":"Cat","breed":"British Shorthair","description":"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.","age":"2 months","inoculations":["rabies"],"diseases":["none"],"parasites":["none"]},{"name":"Charly","img":"pets-charly.png","type":"Dog","breed":"Jack Russell Terrier","description":"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.","age":"8 years","inoculations":["bordetella bronchiseptica","leptospirosis"],"diseases":["deafness","blindness"],"parasites":["lice","fleas"]}]')}},e=>{e(e.s=175)}]);