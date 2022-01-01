import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{ title }}</h1>
    <app-infotext></app-infotext>
    <app-loremlipsum></app-loremlipsum>
    <app-palindromechecker></app-palindromechecker>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'from Angular!';
}
