import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../services/axios.service';

@Component({
  selector: 'app-auth-comp',
  templateUrl: './auth-comp.component.html',
  styleUrls: ['./auth-comp.component.scss']
})
export class AuthCompComponent implements OnInit {

  data : Array<string> = [];

  constructor(private axios: AxiosService) {
  }
 ngOnInit(): void {
    this.axios.request('get','/message',{}).then((res)=>{
      console.log(res);
      this.data = res.data;
    }).catch((err:object)=>{
      console.log(err);
    })
 }
}
