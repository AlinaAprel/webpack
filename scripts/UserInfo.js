
export class UserInfo {
  constructor(formEdit, nameInfo, aboutInfo, editContainer, newFormImage, apiUser) {
    this.formEdit = formEdit;
    this.nameInfo = nameInfo;
    this.aboutInfo = aboutInfo;
    this.editContainer = editContainer;
    this.newFormImage = newFormImage;
    this.apiUser = apiUser;
  }

    setUserInfoServer(nameText, aboutText) {
      this.nameInfo.textContent = nameText;
      this.aboutInfo.textContent = aboutText;
    }

    updateUserInfo(text) {
      this.nameInfo = text.forename;
      this.aboutInfo = text.about;
    }

    setNameAndAbout() {
      this.name = this.formEdit.querySelector('.popup__input_type_forename');
      this.about =  this.formEdit.querySelector('.popup__input_type_about');
    }

    getUserName() {
      this.setNameAndAbout()
      this.name.value = this.nameInfo.textContent;
      this.about.value = this.aboutInfo.textContent;
    }
}

