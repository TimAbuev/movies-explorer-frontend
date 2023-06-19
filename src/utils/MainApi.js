class Api {
  #onResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ message: "Ошибка на стороне сервера", res })
  }
 
  constructor() {
    this._url = 'https://api.carousel.nomoredomains.rocks';
    this._headers = {
      "content-type": "application/json",
      "authorization": `Bearer ${localStorage.getItem('jwt')}`,
    };
  }

  editInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this.#onResponse);
  }

  getProfile() {
    return fetch(`${this._url}/users/me`, { headers: this._headers })
      .then(this.#onResponse);
  }

}

const api = new Api();
export default api;