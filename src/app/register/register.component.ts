import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  userdata = {
  
  'fullname': "" ,
  'username': "" ,
  'password':"",
  'email': "",
  'phone_no':"" 

  }

  re_password 

  constructor(private httpClient: HttpClient,
                private router: Router) { }

  ngOnInit(): void {
  }

  register()
  {

    console.log(this.userdata)

    this.httpClient.post(
      'http://44.230.62.224:5000/register', 
       this.userdata,
    )
    .toPromise()
    .then(response => {
      console.log(response);
      
    })
    .catch(console.log);

  this.router.navigate([''])
    

  }

}
