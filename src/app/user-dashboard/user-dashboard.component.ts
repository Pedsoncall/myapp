import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router: Router,
    private cook: CookieService) { }
  username
  

  logout()
  {
    this.cook.deleteAll()
    this.router.navigate(['login'])
    //console.log("deleted")
  }

  ngOnInit(): void {
    this.username=this.cook.get('username')
  }

}
