import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnDestroy {
  @Input() locale = '';

  time = '';
  id: any = null;

  constructor() {
    console.log('constructor', this.locale);
  }
  ngOnInit(): void {
    console.log('ngOnInit', this.locale);
    this.tick();
    console.log('start interval');

    this.id = setInterval(this.tick, 1000);
  }

  ngOnDestroy(): void {
    console.log('clear interval');
    clearInterval(this.id);
  }

  tick = () => {
    this.time = new Date().toLocaleTimeString(this.locale);
    console.log(this.time);
  };
}
