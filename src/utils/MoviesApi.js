class MoviesApi {
  #onResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ message: "Ошибка на стороне сервера", res })
  }

  constructor() {
    this._url = 'https://api.nomoreparties.co/beatfilm-movies';
    this._headers = {
      "content-type": "application/json",
      "authorization": `Bearer ${localStorage.getItem('jwt')}`,
    };
  }

  getMovies() {
    return fetch(`${this._url}`, { headers: this._headers })
      .then(this.#onResponse);
  }

}

const moviesApi = new MoviesApi();
export default moviesApi;