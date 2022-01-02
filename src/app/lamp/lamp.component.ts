import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lamp',
  template: '<img src="assets/{{ui}}.png" width="100px"/>',
})
export class LampComponent implements OnInit, OnChanges {
  @Input() toggle: boolean = false;
  ui: string = 'off';

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.ui = this.toggle ? 'on' : 'off';
  }
}
