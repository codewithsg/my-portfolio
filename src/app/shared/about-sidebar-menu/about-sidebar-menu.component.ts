import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-sidebar-menu',
  templateUrl: './about-sidebar-menu.component.html',
  styleUrls: ['./about-sidebar-menu.component.scss']
})
export class AboutSidebarMenuComponent implements OnInit {
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit() {
    console.log(this.activatedRoute.url);
  }

  toogleExtraUl(){
    const extraUlElement = document.getElementById('extraUl');
    console.log('before:',extraUlElement)
    extraUlElement?.classList.toggle('hidden');
    console.log('after:',extraUlElement);
  }

  goToBiography(){
    this.router.navigate(['about/bio'])
  }

  goToExperience(){
    this.router.navigate(['about/experience'])
  }

  goToEducation(){
    this.router.navigate(['about/education'])
  }

  goToSkills(){
    this.router.navigate(['about/skills'])
  }

  goToTestimonies(){
    this.router.navigate(['about/testimonies'])
  }

  goToCertificate(){
    this.router.navigate(['about/extra/certificate'])
  }

  goToLanguage(){
    this.router.navigate(['about/extra/language'])
  }

  goToVolunteering(){
    this.router.navigate(['about/extra/volunteering'])
  }

  goToHobbies(){
    this.router.navigate(['about/extra/hobbies'])
  }
}
