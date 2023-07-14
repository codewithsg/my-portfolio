import { Component } from '@angular/core';

@Component({
  selector: 'app-two-one',
  templateUrl: './two-one.component.html',
  styleUrls: ['./two-one.component.scss']
})
export class TwoOneComponent {
  goToLMS(){
    window.open('https://github.com/codewithsg/interactive-video-lms','_blank')
  }

  goToProductRecommendation(){
    window.open('https://github.com/codewithsg/recommend-product','_blank')
  }
}
