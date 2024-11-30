import { Component } from '@angular/core';

@Component({
  selector: 'app-two-two',
  templateUrl: './two-two.component.html',
  styleUrls: ['./two-two.component.scss']
})
export class TwoTwoComponent {
  projects = [{
    name: 'Resturant Management System',
    skills: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    duration: 'Jan 2022 - Apr 2022',
    description: 'The Restaurant Management System was developed to optimize workflows and increase operational efficiency. Its purpose was to deliver an all-encompassing solution for different areas of restaurant management, such as user administration, inventory control, order processing, billing, financial accounting, reporting, data analysis, and online ordering. The primary objectives of the system were to elevate the customer experience, streamline day-to-day operations, and ultimately drive greater profitability for the business.',
    isAvailable: false,
    url: 'https://github.com/codewithsg/restaurant-management-api'
  }, {
    name: 'Art Gallary Ecommerce',
    skills: ['TypeScript', 'NestJS', 'MongoDB'],
    duration: 'Apr 2022 - June 2022',
    description: 'Art Gallery Ecommerce is a web application designed to provide a user-friendly platform for enthusiasts to purchase high-quality from a curated selection of artists. This application was developed with the goal of learning NestJs and Jest for unit testing and end-to-end(e2e) testing.',
    isAvailable: false,
    url: 'undefined'
  }]

  openProject(url: string) {
    window.open(url, '_blank');
  }
}
