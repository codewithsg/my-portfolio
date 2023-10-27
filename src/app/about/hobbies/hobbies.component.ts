import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  hobbies = [
    {
      name: 'Cycling',
      image: './../../../assets/img/cycling.svg'
    }, {
      name: 'Hiking',
      image: './../../../assets/img/hiking.svg'
    }, {
      name: 'Listening and Playing Music',
      image: './../../../assets/img/music.svg'
    }, {
      name: 'Photography',
      image: './../../../assets/img/camera.svg'
    }, {
      name: 'Reading',
      image: './../../../assets/img/book.svg'
    }, {
      name: 'Video Games',
      image: './../../../assets/img/videoGameController.svg'
    }
  ]
}
