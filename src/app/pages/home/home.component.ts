import { Component } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private axios: AxiosService) {}
  getMessage() {
    this.axios.request('get', '/message', {}).then(({ data }) => {
      console.log(data);
    });
  }
}
