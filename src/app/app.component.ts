import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { }
}
