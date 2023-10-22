import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { User } from '../interfaces/User';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user?: User;

  constructor(private axios: AxiosService, private router: Router) {
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(String(sessionStorage.getItem('user')));
    } else {
      this.user = undefined;
    }
  }

  login(email: string, password: string) {
    this.axios
      .request('post', '/api/auth/login', { email, password })
      .then(({ data }) => {
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/']);
      });
  }

  register(user: User) {
    this.axios.request('post', '/api/auth/register', user).then(({ data }) => {
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['/']);
    });
  }
}
