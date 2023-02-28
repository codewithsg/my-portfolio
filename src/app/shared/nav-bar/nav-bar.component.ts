import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    btn?.addEventListener('click', () => {
      btn?.classList.toggle('open')
      nav?.classList.toggle('flex')
      nav?.classList.toggle('hidden')
    })
  }

  hamburgerMenu(){
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
      btn?.classList.toggle('open')
      nav?.classList.toggle('flex')
      nav?.classList.toggle('hidden')
  }

  gotoHello() {
    this.router.navigate(['hello'])
    this.hamburgerMenu()
  }

  gotoAbout() {
    this.router.navigate(['about/bio'])
    this.hamburgerMenu()
  }

  gotoProject() {
    this.router.navigate(['project/twenty-three'])
    this.hamburgerMenu()

  }
}
