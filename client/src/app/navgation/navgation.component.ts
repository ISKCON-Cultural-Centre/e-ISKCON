import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';



import { DevoteeApi } from '../shared/sdk';


@Component({
  selector: 'app-navgation',
  templateUrl: './navgation.component.html',
  styleUrls: ['./navgation.component.css']
})
export class NavgationComponent implements OnInit {

  isLogin: Boolean = false;

  constructor(private router: Router, private devoteeApi: DevoteeApi) {

    this.router.events
      .subscribe((route) => {
        this.isLogin = (route as NavigationEnd).url.match('/login') !== null ||
          (route as NavigationEnd).url.match('/reset') !== null;
      });
  }


  ngOnInit() { }

  logout() {
    this.devoteeApi.logout().subscribe((response) => {
      // Clear Token and other local storage
      this.router.navigate(['/login']);
    });
  }

}
