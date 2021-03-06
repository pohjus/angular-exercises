import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  template: 'Countdown = {{theNumber}}',
})
export class CountdownComponent implements OnInit {
  @Input() from = 0;
  @Input() to = 0;

  theNumber: number = 0;
  id: any = null;

  @Output() finished = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.theNumber = this.from;
    this.id = setInterval(() => {
      if (this.theNumber < this.to - 1) {
        this.theNumber++;
      } else {
        this.theNumber++;

        clearInterval(this.id);
        this.finished.emit('countdown done');
      }
    }, 1000);
  }
}
