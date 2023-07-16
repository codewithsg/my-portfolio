import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-skill',
  templateUrl: './tech-skill.component.html',
  styleUrls: ['./tech-skill.component.scss']
})
export class TechSkillComponent {
  techSkills = [
    {
      logo:'./../../../assets/img/typescript.svg',
      name:'TypeScript',
      skill:''
    }
  ]
}
