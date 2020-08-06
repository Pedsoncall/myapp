import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  username=''
  otp;
  new_password;
  confirm_password;
  
  status="username"

  data

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  sendmail()
  {
    console.log(this.username)

    this.httpClient.post(
      'http://44.230.62.224:5000/send_otp', 
       {"username":this.username},
    )
    .toPromise()
    .then(response => {
      
      this.data=response
      console.log(this.data)
      if(this.data.status=="sent")
      {
        this.status="otp"
      }

      
    })
    .catch(console.log);

  
  }
  
  

  submit_otp()
  {
    console.log(this.otp)
    

    this.httpClient.post(
      'http://44.230.62.224:5000/validate_resetpass_otp', 
       {"otp":this.otp,"username":this.username},
    )
    .toPromise()
    .then(response => {
      
      this.data=response
      console.log(this.data)
      if(this.data.otp_status=="correct")
      {
        this.status="reset"
      }
      
    })
    
    
    .catch(console.log);


  }

  reset()
  {

    if(this.new_password==this.confirm_password && this.new_password!="")
    {
      this.httpClient.post(
        'http://44.230.62.224:5000/reset_password', 
        {"new_password":this.new_password,"username":this.username},
      )
      .toPromise()
      .then(response => {
        
        this.data=response
        console.log(this.data)
        if(this.data.reset_status=="true")
        {
          this.status="done"
        }
        
      }) 
    }

  }


}
