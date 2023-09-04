import { BASE_URL, config } from './constants';
import { setCookie, getCookie } from './cookie';

class Api {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }
  _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _request(
    url: string,
    options?: {
      method?: string;
      headers?: {
        'Content-type': 'application/json';
        authorization?: string;
      };
      body?: string;
    }
  ) {
    return fetch(url, options).then(this._checkResponse);
  }

  getItems() {
    return this._request(`${this.url}/cards`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: config.headers.authorization,
      },
    });
    //console.log(getCookie('jwt'));
  }
  
  logUp(username: string, email: string, password: string, about?: string, avatar?: string) {
    return this._request(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, about, avatar }),
    });
  }

  logIn(username: string, password: string) {
    return this._request(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  }

  logOut() {
    sessionStorage.removeItem("auth_token");
  }

  async postItems(name: string, description: string,  image: string, price: number) {
    return await this._request(`${this.url}/cards`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: config.headers.authorization,
      },
      body: JSON.stringify({ name, description, image, price }),
    });
  }

  async deleteItems(itemId: string) {
    return await this._request(`${this.url}/cards/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        authorization: config.headers.authorization,
      },
    });
  }

  getUserInfo() {
    return this._request(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${getCookie('jwt')}`,
      },
    });
  }

  async patchUserInfo(name: string, about: string) {
    return await this._request(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        authorization: config.headers.authorization,
      },
      body: JSON.stringify({ name, about }),
    });
  }
}

const api = new Api(BASE_URL);

export { api };
