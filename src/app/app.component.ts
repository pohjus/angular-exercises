import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{ title }}</h1>
    <h2>Clock</h2>

    <button (click)="toggle()">Toggle Clock</button><br />
    <input type="text" [(ngModel)]="locale" placeholder="give locale" />
    <app-clock *ngIf="isVisible" [locale]="locale"></app-clock>
    <app-infotext></app-infotext>
    <app-loremlipsum></app-loremlipsum>
    <app-palindromechecker></app-palindromechecker>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'from Angular!';
  isVisible = true;
  locale = '';

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
