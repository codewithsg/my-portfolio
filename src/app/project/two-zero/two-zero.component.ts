import { Component } from '@angular/core';

@Component({
  selector: 'app-two-zero',
  templateUrl: './two-zero.component.html',
  styleUrls: ['./two-zero.component.scss']
})
export class TwoZeroComponent {
  projects = [{
    name: 'Room Finder',
    skills: ['Angular', 'Node.js', 'JavaScript', 'MongoDB'],
    duration: 'Apr 2020 - Feb 2021',
    description: 'Room Finder is a web application designed to simplify the process of finding a room for rent. It is an online platform that allows landlords to post their available rooms and tenants to search for and choose a room based on their preferences.<br><br>The website offers a variety of search filters, including price, size, parking, water facilities and location. This allows tenants to easily find rooms that meet their specific needs and budget. Landlords can post detailed information about their rooms and amenities.<br><br>Room Finder is a user-friendly and convenient web application that simplifies the process of finding a room for rent. By providing landlords and tenants with a platform to connect and communicate, the website streamlines the rental process and helps both parties save time and effort.',
    isAvailable: true,
    url: 'https://github.com/codewithsg/room-finder-minor'
  }]

  openProject(url: string) {
    window.open(url, '_blank');
  }
}
