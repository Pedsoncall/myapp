import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGaurd implements CanActivate {
  
  constructor(private cook:CookieService,private router:Router,private httpClient:HttpClient){ }
  data


  canActivate() 
  {
    console.log('in user routes gaurd')

    
    return this.httpClient.get(
      'http://127.0.0.1:5000/user_check', 
    )
    .toPromise()
    .then(response => {
      
      this.data=response
      console.log(this.data)
      
      if(this.data.user=="true")
      { return true }
      else
      {
        console.log("noe nrty")
        return false
      }
      
    },
    err => {
      return false
    })
    .catch(
      err => {
        console.log(err)
        console.log("flase")
        return false
      }
      
      );
    


    
  }
  
}
