import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-dash-board-new',
  templateUrl: './user-dash-board-new.component.html',
  styleUrls: ['./user-dash-board-new.component.css']
})
export class UserDashBoardNewComponent implements OnInit {

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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 50) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }

}
