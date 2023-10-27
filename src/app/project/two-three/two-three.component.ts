import { Component } from '@angular/core';

@Component({
  selector: 'app-two-three',
  templateUrl: './two-three.component.html',
  styleUrls: ['./two-three.component.scss']
})
export class TwoThreeComponent {
  projects = [
    {
      name: 'Human Resource Management System',
      skills: ['Ionic VueJs', 'Laravel', 'MySql'],
      duration: 'Dec 2022 - Jan 2023',
      description: 'Human Resource Management is a mobile application that streamlines attendance management, leave requests and provides insightful reports. Employees can quickly and easily log their attendance and system saves their location to ensure they are logging from designated work area. Additionally employees can request leaves directly from app, which saves time and simplify the process. This app also keep track of workdays, so that employees can plan their time off accordingly. The system was mainly designed to make attendance and leave management simple, efficient and user-friendly.',
      isAvailable: false,
      url: 'undefined'
    }
  ]

  openProject(url: string) {
    window.open(url, '_blank');
  }
}
