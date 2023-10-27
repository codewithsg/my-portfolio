import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.scss']
})
export class VolunteeringComponent {
  volunteerings = [
    {
      name: 'Robokath Club',
      designation: 'Member, Robotics Club',
      duration: 'Aug 2017 - Feb 2022 , 4yr 5mos',
      image: './../../../assets/img/kathfordLogo.svg'

    }, {
      name: 'Leo Club',
      designation: 'Board Member, Social Service',
      duration: '2020-2023, 3yr',
      image: './../../../assets/img/leoClub.svg'
    }
  ]
}
