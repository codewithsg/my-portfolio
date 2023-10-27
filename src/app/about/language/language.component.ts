import { Component } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  languages = [
    {
      name: 'English Language',
      category: 'Fluent',
      skill: 3
    }, {
      name: 'Hindi Language',
      category: 'Fluent',
      skill: 3
    }, {
      name: 'Nepali Language',
      category: 'Natural Tongue',
      skill: 5
    }
  ];

  getStars(skillRating: number): number[] {
    return new Array(skillRating);
  }
}
