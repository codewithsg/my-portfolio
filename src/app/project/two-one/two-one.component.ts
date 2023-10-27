import { Component } from '@angular/core';

@Component({
  selector: 'app-two-one',
  templateUrl: './two-one.component.html',
  styleUrls: ['./two-one.component.scss']
})
export class TwoOneComponent {
  projects = [{
    name: 'Learning Management System',
    skills: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    duration: 'Apr 2021 - Dec 2021',
    description: 'Interactive Video Learning Management System is a comprehensive platform designed to facilitate the learning process through the use of interactive video courses. The system includes a variety of features such as Q&A sessions, video courses, exercises, quizzes, blog, and progress tracking tools. The platform is designed to be used by both individuals and institutions like colleges and schools.<br><br>Overall, LMS is a comprehensice platform that provides a wide range of features and tools to facilitate the learning process. Whether used by individuals or institutions, the system is designed to provide an engaging and interactive learning experience that is both effective and efficient.',
    isAvailable: true,
    url: 'https://github.com/codewithsg/interactive-video-lms'
  }, {
    name: 'Product Recommendation',
    skills: ['JavaScript', 'Python', 'Django', 'K-Means Clustering', 'SQLite 3'],
    duration: 'Aug 2021 - Feb 2022',
    description: "Product Recommendation is a web application that recommends products to users based on their purchase history. This application is designed to help users discover new products that may be interested in.<br><be>Users can view product details such as, product name, description, price and availability and ad products to cart directly. When a user purchase a product, the system analyzes their purchase history and recommends five other products that are related to their purchase. The recommendations are based on various factor, such as user's previous purchase, products that are bought together and popularity of products in user's area.<br><br>Overall, Product Recommendation is a powerful web application that provides personalized recommendations to users. With its user-friendly interface and efficient recommendation algorithm, application helps users discover new products and improve their overall shopping experience.",
    isAvailable: true,
    url: 'https://github.com/codewithsg/recommend-product'
  }]

  openProject(url: string) {
    window.open(url, '_blank');
  }
}
