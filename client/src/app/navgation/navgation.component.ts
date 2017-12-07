import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';


import { DevoteeApi } from '../shared/sdk';


@Component({
  selector: 'app-navgation',
  templateUrl: './navgation.component.html',
  styleUrls: ['./navgation.component.css']
})
export class NavgationComponent implements OnInit {

  isLogin: Boolean = false;

  constructor(private router: Router, private devoteeApi: DevoteeApi, private authService: AuthService) {

    // This is to restrict navigation header in login and Reset pages
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // console.log(evt.url.match('/login'));
        this.isLogin = evt.url.match('/login') != null || evt.url.match('/reset') != null || evt.url.match('/register') != null;
      }
    });
  }


  ngOnInit() { }

  logout() {
    this.devoteeApi.logout().subscribe((response) => {
      // Clear Token and other local storage
      this.authService.clearFromSession();
      this.router.navigate(['/login']);
    });
  }

}
