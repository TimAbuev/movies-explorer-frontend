import {checkResponse} from '../utils/checkResponse'
export const BASE_URL = 'https://api.carousel.nomoredomains.rocks';

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