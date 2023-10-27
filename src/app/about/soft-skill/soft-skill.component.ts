import { Component } from '@angular/core';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss']
})
export class SoftSkillComponent {
  softSkills = [
    {
      logo: './../../../assets/img/problemSolving.svg',
      name: 'Problem-Solving'
    }, {
      logo: './../../../assets/img/sharpMemory.svg',
      name: 'Fast Learner'
    }, {
      logo: './../../../assets/img/efficientLaziness.svg',
      name: 'Efficient Laziness'
    }, {
      logo: './../../../assets/img/selfMotivation.svg',
      name: 'Self-Motivation and Independence'
    }, {
      logo: './../../../assets/img/dedication.svg',
      name: 'Dedication'
    }
  ]
}
