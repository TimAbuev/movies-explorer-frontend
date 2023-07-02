class Api {
  #onResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ message: "Ошибка на стороне сервера", res })
  }

  constructor() {
    this._url = process.env.NODE_ENV === 'production' ? 'https://api.carousel.nomoredomains.rocks' : 'http://localhost:3000';
    // this._url = process.env.NODE_ENV === 'production' ? 'https://api.carousel.nomoredomains.rocks' : 'https://api.carousel.nomoredomains.rocks';
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

  getMyMovies() {
    return fetch(`${this._url}/movies`, { headers: this._headers })
      .then(this.#onResponse);
  }

  createMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this.#onResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this.#onResponse);
  }

}

const mainApi = new Api();
export default mainApi;