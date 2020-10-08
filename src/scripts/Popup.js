export class Popup {
    constructor(element, classOpenPopup) {
      this.element = element;
      this.classOpenPopup = classOpenPopup;

      this.element.querySelector('.popup__close').addEventListener('click', () => this.close());
    }

    setImage(event) {
      this.element.querySelector('.popup-image__picture').src = event.target.getAttribute('src');
    }

    open() {
      this.element.classList.add(this.classOpenPopup);
    }

    close() {
      this.element.classList.remove(this.classOpenPopup);
    }
  }
