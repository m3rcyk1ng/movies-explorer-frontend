import { IMainApi, ISingData } from './IMainApi';

class MainApi {
  _url: string;
  _headers: { 'Content-Type': string };

  constructor({ url, headers }: IMainApi) {
    this._url = url;
    this._headers = headers;
  }

  _checkStatus(res: { ok: boolean; json: () => any; status: any }) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  saveMovie(card: any) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(card),
    }).then(this._checkStatus);
  }

  deleteMovie(movieId: string) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkStatus);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkStatus);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkStatus);
  }

  register({ name, email, password }: ISingData) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    }).then(this._checkStatus);
  }

  login({ email, password }: ISingData) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkStatus);
  }

  signOut() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkStatus);
  }

  editUserInfo({ name, email }: ISingData) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkStatus);
  }
}

export const mainApi = new MainApi({
  url: 'http://localhost:3001',
  // url: 'https://api.biba.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json',
  },
});
