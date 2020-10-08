export class Card {
  constructor(name, link, newFormImage, itemTemplate) { 
    this.name = name;
    this.link = link;
    this.newFormImage = newFormImage; 
    this.itemTemplate = itemTemplate;
  }

    create() {
      const clone = this.itemTemplate.cloneNode(true);
      const cardImage = clone.querySelector('.place-card__image');
      clone.querySelector('.place-card__name').textContent = this.name;
      cardImage.src = `${this.link}`;
      const cardLike = clone.querySelector('.place-card__like-icon');
      const cardDelete = clone.querySelector('.place-card__delete-icon');
      this.likeBtn = cardLike;
      this.deletedBtn = cardDelete;
      this.cardImage = cardImage;
      this.cardElement = clone;
      this.setEventListeners()
      return clone
    }

    setEventListeners() {
      this.likeBtn.addEventListener('click', this.like);
      this.deletedBtn.addEventListener('click', this.remove);
      this.cardImage.addEventListener('click', this.openImage);
    }

    openImage(event) { 
      this.newFormImage.setImage(event);
      this.newFormImage.open();
    }
    removeEventListener() {
      const card = event.target.closest('.place-card');
      /* Надо исправить:

      Необходимо удалять обработчики с тех элементов, на которые они добавляются, т.е 
      для удалиня обработчика с иконки удаляения карточки необходимо использовать
      card.querySelector('.place-card__delete-icon')
      Для элемента изображения - card.querySelector('.place-card__image')

      */
      card.querySelector('.place-card__like-icon').removeEventListener('click', this.like)
      card.querySelector('.place-card__delete-icon').removeEventListener('click', this.remove)
      card.querySelector('.place-card__image').removeEventListener('click', this.openImage)
    }

    like(event) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }

    remove(event) {
     event.target.closest('.place-card').remove();
     removeEventListener();
    }
  }