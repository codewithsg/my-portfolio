import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private router:Router){}
  
  gotoHello(){
    this.router.navigate(['hello'])
  }

  gotoAbout(){
    this.router.navigate(['about/bio'])
  }

  gotoProject(){
    this.router.navigate(['project'])
  }
}