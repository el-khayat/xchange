import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  constructor() {
    console.log(sessionStorage.getItem('user'));

    const token = JSON.parse(String(sessionStorage.getItem('user')))
      ?.access_token
      ? JSON.parse(String(sessionStorage.getItem('user')))?.access_token
      : '';
    console.log('token is ' + token);

    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] =
      'application/json;charset=utf-8';
    if (token) {
      axios.defaults.headers.get['Authorization'] = 'Bearer ' + token;
    }
  }

  request(method: string, url: string, data: object) {
    return axios({
      method,
      url,
      data,
    });
  }
}
