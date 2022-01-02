import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges {
  @Input() locale = '';

  time = '';
  id: any = null;

  constructor() {}
  ngOnInit(): void {
    this.tick();
    this.id = setInterval(this.tick, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['locale'].firstChange) {
      console.log('First change, lets use English');

      this.locale = 'EN';
    } else {
      try {
        // error is raised if invalid locale
        new Date().toLocaleTimeString(this.locale);
        console.log('correct locale: ', this.locale);
      } catch {
        console.log('incorrect locale, reverting to English');
        this.locale = 'EN';
      }
    }
  }

  tick = () => {
    this.time = new Date().toLocaleTimeString(this.locale);
  };
}
