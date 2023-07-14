import { Component } from '@angular/core';

@Component({
  selector: 'app-two-two',
  templateUrl: './two-two.component.html',
  styleUrls: ['./two-two.component.scss']
})
export class TwoTwoComponent {
  goToRMS(){
    window.open('https://github.com/codewithsg/restaurant-management-api','_blank')
  }
}
