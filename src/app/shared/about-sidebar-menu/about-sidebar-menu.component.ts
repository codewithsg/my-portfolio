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
  ){}

  ngOnInit() {
    if(this.router.url === '/about/certificate' || this.router.url === '/about/language' || this.router.url === '/about/volunteering' || this.router.url === '/about/hobbies'){
      this.toogleExtraUl();
    }

    if(this.router.url === '/about/tech-skill' || this.router.url === '/about/soft-skill'){
      this.toogleSkillUl();
    }
  }

  toogleExtraUl(){
    const extraUlElement = document.getElementById('extraUl');
    extraUlElement?.classList.toggle('hidden');
  }

  toogleSkillUl(){
    const skillUlElement = document.getElementById('skillsUl');
    skillUlElement?.classList.toggle('hidden');
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

  goToTechSkill(){
    this.router.navigate(['about/tech-skill'])
  }

  goToSoftSkill(){
    this.router.navigate(['about/soft-skill'])
  }

  goToTestimonies(){
    this.router.navigate(['about/testimonies'])
  }

  goToCertificate(){
    this.router.navigate(['about/certificate'])
  }

  goToLanguage(){
    this.router.navigate(['about/language'])
  }

  goToVolunteering(){
    this.router.navigate(['about/volunteering'])
  }

  goToHobbies(){
    this.router.navigate(['about/hobbies'])
  }
}
