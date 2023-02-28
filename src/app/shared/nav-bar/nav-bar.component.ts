import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private router: Router) {

  }

  hamburgerIconClick() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    btn?.addEventListener('click', () => {
      btn?.classList.toggle('open')
      nav?.classList.toggle('flex')
      nav?.classList.toggle('hidden')
    })
  }

  gotoHello() {
    this.router.navigate(['hello'])
  }

  gotoAbout() {
    this.router.navigate(['about/bio'])
  }

  gotoProject() {
    this.router.navigate(['project/twenty-three'])
  }
}
