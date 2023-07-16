import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations = [
    {
      college:'Kathford International College of Engineering and Management',
      degree:`Bachelor's Degree in Computer Science and Engineering`,
      address:`Balkumari, Lalitpur`,
      period:`Aug 2017 - Present`,
      logo:'./../../../assets/img/kathfordLogo.svg'
    },
    {
      college:`DAV Sushil Kedia Vishwa Bharati Higher Secondary School`,
      degree:`+2`,
      address:`Jawalakhel, Lalitpur`,
      period:`2014-2016`,
      logo:'./../../../assets/img/davLogo.svg'
    }
  ]
}
