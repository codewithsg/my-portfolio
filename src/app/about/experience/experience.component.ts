import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experience = [
    {
      office: 'Codniv Innovations',
      logo: './../../../assets/img/codnivLogo.svg',
      experience: [
        {
          position: 'Full Stack Developer',
          period: '01 July 2023 - 01 April 2024, 9mos'
        }, {
          position: 'Intern as NodeJS Backend Developer',
          period: '27 March 2023 - 30 June 2023, 3mos'
        }
      ]
    },
    {
      office: 'Mero Network Pvt. Ltd.',
      logo: './../../../assets/img/meroNetwork.svg',
      experience: [
        {
          position:'Intern as Mobile Developer',
          period: 'Nov 2022- Jan 2023, 3 mos'
        }
      ]
    },
    {
      office:'Freelance',
      logo: './../../../assets/img/freelance.svg',
      experience:[
        {
          position: 'Backend Developer',
          period: 'May 2021 - Oct 2022, 1yr 5mos'
        }
      ]
    }
  ]
}

