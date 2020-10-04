export class FormValidator {
    constructor(form, button) {
      this.form = form;
      this.button = button;
    }
  
    checkInputValidity(input, error) {
      if (input.value.length === 0) {
        error.validationMessage = 'Это обязательное поле';
        return false
      }
      if (input.value.length < 2 || input.value.length > 30) {
        error.validationMessage = 'Должно быть от 2 до 30 символов';
        return false
      }
  
      else {
        error.validationMessage = '';
        return true;
      }
  }
  
    inputValid(input) {
      const error = input.parentNode.querySelector(`#${input.id}__error`);
      const checkInput = this.checkInputValidity(input, error);
      error.textContent = error.validationMessage;
      return checkInput;
    }
  
    validityForm() {
    const inputs = [...this.form.querySelectorAll('.popup__input')];
    let checkInput = true;
  
    inputs.forEach((input) => {
      if (input.type !== 'submit' && input.type !== 'button') {
        if (!this.inputValid(input)) {
          checkInput = false;
        }
      }
    });
    return checkInput;
    }
    
    removeClassButton() {
      this.button.disabled = true;
      this.button.classList.remove('popup__button_enabled');
      this.button.classList.add('popup__button');
    }

    setSubmitButton() {
      if (this.form.checkValidity() === false) {
        this.removeClassButton();
      }
  
      else {
        this.button.disabled = false;
        this.button.classList.add('popup__button_enabled')
      }
    }
  }

