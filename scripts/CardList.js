
export class CardList {
    constructor(container, api, createCard) {
     this.container = container;
     this.api = api;
     this.createCard = createCard;
    }

    addCard(card) {
      this.container.appendChild(card);
    }

    createNewCard(item) {
      const card = this.createCard(item.name, item.link)
      const cardElement = card.create();
      this.addCard(cardElement);
    }

    render() {
      this.api.getCards().then((res) => {
        res.forEach( item => {
          this.createNewCard(item)
        })
      })
      .catch(err => console.log(err))
      /* (+)Надо исправить

      Блок .catch должен находиться здесь, а не в классе Api
      */
    }
}



