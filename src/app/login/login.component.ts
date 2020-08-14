import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  constructor(private httpClient: HttpClient,private router:Router,private cookieserv:CookieService) { }

  
  ngOnInit(): void {
  }

  data

  myfunc()
  {
    console.log(this.username)
    console.log(this.password)
    this.httpClient.get(
      //'http://44.230.62.224:5000/', 
      'http://0.0.0.0:5000/',
    {
      headers: new HttpHeaders({ 'Authorization': 'Basic '+btoa(this.username+":"+this.password) }),
    }
    
    )
    .toPromise()
    .then(response => {

      this.data=response;
      console.log(this.data)

      this.cookieserv.set('token',this.data.token)
      this.cookieserv.set('username',this.data.username)

      if(this.data.role=='admin')
      {
        console.log("admin")
        this.router.navigate(['admin_dashboard/user_management']);
      }
      else if(this.data.role=='user')
      {
        console.log("user")
        this.router.navigate(['user_dashboard']);
      }

    })
    .catch(console.log);

    console.log("in myfunc")




  }

}
