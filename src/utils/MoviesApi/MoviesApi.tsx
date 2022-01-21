import { IMoviesApi } from "./IMoviesApi";

export default class Api {
    _link: string;
    _token: { "Content-Type": string };
    constructor({ link, token }: IMoviesApi) {
        this._link = link;
        this._token = token;
    };

    getBeatfilmMovies() {
        return fetch(`${this._link}`, {
            headers: this._token,
        })
            .then(this._checkStatus);
    }

    _checkStatus(res: { ok: boolean; json: () => any; status: any; }) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const moviesApi = new Api({
  link: 'https://api.nomoreparties.co/beatfilm-movies',
  token: {
    'Content-Type': 'application/json',
  },
});
