//54ed1289-fca2-4194-8437-31e37df26610
//https://nomoreparties.co/cohort12/cards
//https://nomoreparties.co/cohort12/users/me
//https://nomoreparties.co/cohort12/users/me

export class Api {
    constructor(config) {
        this.url = config.baseUrl;
        this.headers = config.headers;
    }

    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
        /* Можно лучше:

        Проверка ответа сервера и преобразование из json дублируются во всех методах класса Api, 
        рекомендую вынести в отдельный метод, например _getResponseData 
        (Подчеркивание в начале имени метода говорит о том, что метод является приватным, 
        т.е. не используется вне класса Api )  
        */
        .then((result) => {
            if(result.ok) {
                return result.json()
            }
           return Promise.reject(new Error(`Ошибка: ${res.status}`));
        })
    }

    getCards() {
        return fetch(`${this.url}/cards`, {
            method: 'GET', 
            headers: this.headers
        })
        .then((result) => {
            if(result.ok) {
                return result.json()
            }
            return Promise.reject(new Error(`Ошибка: ${res.status}`));
        })
    }

    updateProfile(name, about) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about
              })
        })
        .then((result) => {
            if(result.ok) {
                return result.json()
            }
            return Promise.reject(new Error(`Ошибка: ${res.status}`));
         })
    }
}