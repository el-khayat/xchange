import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  submitForm(): void {
    console.log('register', this.form);
    const user = this.form.value;
    this.auth.register(user);
  }
  constructor(private auth: AuthService) {
    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  ngOnInit(): void {
    console.log('register');
  }
}
