//ПЕРЕМЕННЫЕ
(function () {
import * as api from 'scripts/Api.js';
import * as card from 'scripts/Card.js';
import * as cardlist from 'scripts/CardList.js';
import * as form from 'scripts/FormValidator.js';
import * as cards from 'scripts/initial-cards.js';
import * as popup from 'scripts/Popup.js';
import * as user from 'scripts/UserInfo.js';



const editPlaceButton = document.querySelector('#button');
const openPopupBtn = document.querySelector('.user-info__button');
const openEditBtn = document.querySelector('.user-info__edit');
const submitEditBtn = document.querySelector('#button-edit');
const closeButton = document.querySelector('.popup__close');
const closeButtonEdit = document.querySelector('#popup__close-edit')

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup-profile');
const popupImage = document.querySelector('.popup-image');

const itemTemplate = document.querySelector('.my-template').content;

const list = document.querySelector('.places-list');
const form = document.forms.new;
const formEdit = document.forms.newEdit;
const name = document.querySelector('.popup__input_type_forename');
const about = document.querySelector('.popup__input_type_about');
const editContainer = {};
//NAME AND ABOUT TEXT
const nameInfo = document.querySelector('.user-info__name');
const aboutInfo = document.querySelector('.user-info__job');

const config = {
  baseUrl: 'https://nomoreparties.co/cohort12',
  headers: {
      authorization: '54ed1289-fca2-4194-8437-31e37df26610',
      'Content-Type': 'application/json'
  }}

const api = new Api(config); 
api.getCards()
api.getUserInfo();

const newFormImage = new Popup(popupImage, 'popup_is-opened');

const createCard = (name, link) => new Card(name, link, newFormImage, itemTemplate); 

const cardList = new CardList(list, api, createCard);
cardList.render();

const newFormPopup = new Popup(popup, 'popup_is-opened', 'popup');

const newFormEdit = new Popup(popupEdit, 'popup_is-opened', 'popup-profile');



function addNewCard() {
  event.preventDefault();
  const nameCard = form.elements.name;
  const linkCard = form.elements.link;
  const cardAdd = new Card(nameCard.value, linkCard.value, newFormImage, itemTemplate);
  const cardElement = cardAdd.create();
  cardList.addCard(cardElement);
}

form.addEventListener('submit', (evt)=>{
  addNewCard(evt);
  form.reset();
  newFormPopup.close();
})


const editUserData = new UserInfo(formEdit, nameInfo, aboutInfo, editContainer, newFormImage, api);

api.getUserInfo().then((res) => {
  editUserData.setUserInfoServer(res.name, res.about)
})
.catch(err => console.log(err))

submitEditBtn.addEventListener('click', (event)=>{
  event.preventDefault()
  api.updateProfile(name.value, about.value).then((res) => {
    nameInfo.textContent = res.name;
    aboutInfo.textContent = res.about;
    newFormEdit.close()
  })
.catch(err => console.log(err))
})

const validationEdit = new FormValidator(formEdit, submitEditBtn);

function buttonValidity() {
  validationEdit.validityForm()
  validationEdit.setSubmitButton()
}

formEdit.addEventListener('input', ()=>{
  buttonValidity()
})

openEditBtn.addEventListener('click', () => {
  newFormEdit.open();
  editUserData.getUserName();
  buttonValidity()
})

const validationPlace = new FormValidator(form, editPlaceButton);
form.addEventListener('input', ()=> {
  validationPlace.setSubmitButton()
})

openPopupBtn.addEventListener('click', () => {
  form.reset();
  newFormPopup.open();
  validationPlace.setSubmitButton()
})

closeButton.addEventListener('click', () => {
  validationPlace.removeClassButton()
})

closeButtonEdit.addEventListener('click', () => {
  validationEdit.removeClassButton()
})

})();

/* REVIEW:

Доброго времени суток, Алина!

Вы исправили большинство ошибок, отлично! Однако немного не разобрались с удалением обработчиков в классе Card.
Необходимо удалять обработчики с тех элементов, на которые они добавляются(см. подробный комментарий в Card.js)

После исправления данного небольшого недочета будет принята

*/