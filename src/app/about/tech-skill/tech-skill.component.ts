import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-skill',
  templateUrl: './tech-skill.component.html',
  styleUrls: ['./tech-skill.component.scss']
})
export class TechSkillComponent {
  techSkills = [
    {
      logo: './../../../assets/img/typescript.svg',
      name: 'TypeScript',
      skill: 4
    }, {
      logo: './../../../assets/img/nestjsLogo.svg',
      name: 'NestJs',
      skill: 3
    }, {
      logo: './../../../assets/img/mongodbLogo.svg',
      name: 'MongoDB',
      skill: 3
    }, {
      logo: './../../../assets/img/mysqlLogo.svg',
      name: 'MySQL',
      skill: 3
    }, {
      logo: './../../../assets/img/postgresql.svg',
      name: 'PostgreSQL',
      skill: 4
    }, {
      logo: './../../../assets/img/jestLogo.svg',
      name: 'Jest',
      skill: 4
    }, {
      logo: './../../../assets/img/awsLogo.svg',
      name: 'Amazon Web Service',
      skill: 3
    }, {
      logo: './../../../assets/img/gitLogo.svg',
      name: 'Git',
      skill: 4
    }, {
      logo: './../../../assets/img/angularLogo.svg',
      name: 'Angular',
      skill: 3
    }, {
      logo: './../../../assets/img/reactLogo.svg',
      name: 'React',
      skill: 3
    }, {
      logo: './../../../assets/img/vuejsLogo.svg',
      name: 'VueJS',
      skill: 3
    }, {
      logo: './../../../assets/img/laravelLogo.svg',
      name: 'Laravel',
      skill: 2
    }
  ]

  getStars(skillRating:number):number[] {
    return new Array(skillRating);
  }
}
