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
    description: 'Resturant Management System was designed to streamline operations and improve efficiency. It aimed to provide comprehensive solutions to various aspects of resturant management including user management, inventory management, order management, billing, financial accounting, reporting and analysis and online ordering. However, due to lack of capital, project had to be terminated at an early stage. Only user  management, inventory management and menu modules were developed.<br><br>While the project was not completed, the developed modules provides a strong foundation for further development in future. With additional funding, resturant management system could be further developed to include additional functionalities. Ultimately, the goal of the system was to enhance the customer experience, increase operational efficiency and boost profitability.',
    isAvailable: true,
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
