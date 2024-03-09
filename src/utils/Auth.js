import {checkResponse} from '../utils/checkResponse';
const { NODE_ENV, URL } = process.env;
export const BASE_URL = NODE_ENV === 'production' ? 'https://api.carousel.nomoredomains.rocks' : 'http://localhost:3000';
// export const BASE_URL = NODE_ENV === 'production' ? 'https://api.carousel.nomoredomains.rocks' : 'https://api.carousel.nomoredomains.rocks';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkResponse)  
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then(checkResponse)
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(checkResponse)
}
