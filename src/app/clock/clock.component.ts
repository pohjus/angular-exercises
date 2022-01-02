import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  @Input() locale = '';

  time = '';

  constructor() {
    console.log('constructor', this.locale);
  }
  ngOnInit(): void {
    console.log('ngOnInit', this.locale);
    this.tick();
    setInterval(this.tick, 1000);
  }

  tick = () => {
    this.time = new Date().toLocaleTimeString(this.locale);
  };
}
