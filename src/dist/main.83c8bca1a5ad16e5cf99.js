!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);class o{constructor(e,t){this.url=t,this.headers=e.headers}getUserInfo(){return fetch(this.url+"/users/me",{method:"GET",headers:this.headers}).then(e=>e.ok?e.json():Promise.reject(new Error("Ошибка: "+res.status)))}getCards(){return fetch(this.url+"/cards",{method:"GET",headers:this.headers}).then(e=>e.ok?e.json():Promise.reject(new Error("Ошибка: "+res.status)))}updateProfile(e,t){return fetch(this.url+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then(e=>e.ok?e.json():Promise.reject(new Error("Ошибка: "+res.status)))}}class r{constructor(e,t,n,o){this.name=e,this.link=t,this.newFormImage=n,this.itemTemplate=o}create(){const e=this.itemTemplate.cloneNode(!0),t=e.querySelector(".place-card__image");e.querySelector(".place-card__name").textContent=this.name,t.src=""+this.link;const n=e.querySelector(".place-card__like-icon"),o=e.querySelector(".place-card__delete-icon");return this.likeBtn=n,this.deletedBtn=o,this.cardImage=t,this.cardElement=e,this.setEventListeners(),e}setEventListeners(){this.likeBtn.addEventListener("click",this.like),this.deletedBtn.addEventListener("click",this.remove),this.cardImage.addEventListener("click",this.openImage)}openImage(e){this.newFormImage.setImage(e),this.newFormImage.open()}removeEventListener(){const e=event.target.closest(".place-card");e.querySelector(".place-card__like-icon").removeEventListener("click",this.like),e.querySelector(".place-card__delete-icon").removeEventListener("click",this.remove),e.querySelector(".place-card__image").removeEventListener("click",this.openImage)}like(e){e.target.classList.toggle("place-card__like-icon_liked")}remove(e){e.target.closest(".place-card").remove(),removeEventListener()}}class s{constructor(e,t,n){this.container=e,this.api=t,this.createCard=n}addCard(e){this.container.appendChild(e)}createNewCard(e){const t=this.createCard(e.name,e.link).create();this.addCard(t)}render(){this.api.getCards().then(e=>{e.forEach(e=>{this.createNewCard(e)})}).catch(e=>console.log(e))}}class i{constructor(e,t){this.form=e,this.button=t}checkInputValidity(e,t){return 0===e.value.length?(t.validationMessage="Это обязательное поле",!1):e.value.length<2||e.value.length>30?(t.validationMessage="Должно быть от 2 до 30 символов",!1):(t.validationMessage="",!0)}inputValid(e){const t=e.parentNode.querySelector(`#${e.id}__error`),n=this.checkInputValidity(e,t);return t.textContent=t.validationMessage,n}validityForm(){const e=[...this.form.querySelectorAll(".popup__input")];let t=!0;return e.forEach(e=>{"submit"!==e.type&&"button"!==e.type&&(this.inputValid(e)||(t=!1))}),t}removeClassButton(){this.button.disabled=!0,this.button.classList.remove("popup__button_enabled"),this.button.classList.add("popup__button")}setSubmitButton(){!1===this.form.checkValidity()?this.removeClassButton():(this.button.disabled=!1,this.button.classList.add("popup__button_enabled"))}}class a{constructor(e,t){this.element=e,this.classOpenPopup=t,this.element.querySelector(".popup__close").addEventListener("click",()=>this.close())}setImage(e){this.element.querySelector(".popup-image__picture").src=e.target.getAttribute("src")}open(){this.element.classList.add(this.classOpenPopup)}close(){this.element.classList.remove(this.classOpenPopup)}}class c{constructor(e,t,n,o,r,s){this.formEdit=e,this.nameInfo=t,this.aboutInfo=n,this.editContainer=o,this.newFormImage=r,this.apiUser=s}setUserInfoServer(e,t){this.nameInfo.textContent=e,this.aboutInfo.textContent=t}updateUserInfo(e){this.nameInfo=e.forename,this.aboutInfo=e.about}setNameAndAbout(){this.name=this.formEdit.querySelector(".popup__input_type_forename"),this.about=this.formEdit.querySelector(".popup__input_type_about")}getUserName(){this.setNameAndAbout(),this.name.value=this.nameInfo.textContent,this.about.value=this.aboutInfo.textContent}}!function(){const e=document.querySelector("#button"),t=document.querySelector(".user-info__button"),n=document.querySelector(".user-info__edit"),u=document.querySelector("#button-edit"),l=document.querySelector(".popup__close"),d=document.querySelector("#popup__close-edit"),p=document.querySelector(".popup"),m=document.querySelector(".popup-profile"),h=document.querySelector(".popup-image"),f=document.querySelector(".my-template").content,_=document.querySelector(".places-list"),v=document.forms.new,y=document.forms.newEdit,b=document.querySelector(".popup__input_type_forename"),g=document.querySelector(".popup__input_type_about"),S=document.querySelector(".user-info__name"),k=document.querySelector(".user-info__job"),E=new o({headers:{authorization:"54ed1289-fca2-4194-8437-31e37df26610","Content-Type":"application/json"}},"https://nomoreparties.co/cohort12");E.getCards(),E.getUserInfo();const q=new a(h,"popup_is-opened"),I=new s(_,E,(e,t)=>new r(e,t,q,f));I.render();const C=new a(p,"popup_is-opened","popup"),L=new a(m,"popup_is-opened","popup-profile");v.addEventListener("submit",e=>{!function(){event.preventDefault();const e=v.elements.name,t=v.elements.link,n=new r(e.value,t.value,q,f).create();I.addCard(n)}(),v.reset(),C.close()});const w=new c(y,S,k,{},q,E);E.getUserInfo().then(e=>{w.setUserInfoServer(e.name,e.about)}).catch(e=>console.log(e)),u.addEventListener("click",e=>{e.preventDefault(),E.updateProfile(b.value,g.value).then(e=>{S.textContent=e.name,k.textContent=e.about,L.close()}).catch(e=>console.log(e))});const j=new i(y,u);function P(){j.validityForm(),j.setSubmitButton()}y.addEventListener("input",()=>{P()}),n.addEventListener("click",()=>{L.open(),w.getUserName(),P()});const x=new i(v,e);v.addEventListener("input",()=>{x.setSubmitButton()}),t.addEventListener("click",()=>{v.reset(),C.open(),x.setSubmitButton()}),l.addEventListener("click",()=>{x.removeClassButton()}),d.addEventListener("click",()=>{j.removeClassButton()})}()}]);