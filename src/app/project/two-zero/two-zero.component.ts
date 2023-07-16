import { Component } from '@angular/core';

@Component({
  selector: 'app-two-zero',
  templateUrl: './two-zero.component.html',
  styleUrls: ['./two-zero.component.scss']
})
export class TwoZeroComponent {
  goToRoomFinder(){
    window.open('https://github.com/codewithsg/room-finder-minor','_blank');
  }
}
