import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private cook:CookieService,private router:Router) { }

  username

  ngOnInit(): void {

    this.username=this.cook.get('username')

  }

  logout()
  {
    this.cook.deleteAll()
    this.router.navigate(['login'])
    //console.log("deleted")
  }

}
