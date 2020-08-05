import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
//import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private cook:CookieService) { }

  intercept(req, next) {
    
    
    let token = this.cook.get('token') //this.getToken()
    
    //console.log("in intrcpt")

    if (!req.headers.has('Authorization')) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
      //console.log("in auth setter")
    }


    //console.log(token)
    return next.handle(req)
  }

  
}
