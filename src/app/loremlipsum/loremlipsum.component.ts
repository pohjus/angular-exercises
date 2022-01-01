import { Component } from '@angular/core';

@Component({
  selector: 'app-loremlipsum',
  template: `<hr />
    <p [ngClass]="{ disabled: computing }">{{ loremlipsum }}</p>
    <button [disabled]="computing" (click)="reverse()">Reverse</button>
    <hr />`,
  styleUrls: ['./loremlipsum.component.css'],
})
export class LoremComponent {
  computing: boolean = false;

  reverse() {
    this.computing = true;

    setTimeout(() => {
      this.loremlipsum = this.loremlipsum.split('').reverse().join('');
      this.computing = false;
    }, 1000);
  }

  loremlipsum: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus
      euismod nulla in porta. Aliquam sollicitudin neque nulla, sit amet dictum
      erat dictum a. Phasellus eget dui nisl. Vivamus tempus felis ut sodales
      sodales. Proin laoreet tortor eget turpis volutpat, eu pulvinar sem
      euismod. Vestibulum et congue massa. Aenean ex ligula, egestas vitae
      turpis in, condimentum pulvinar risus. Nam ultrices elit sit amet lectus
      convallis placerat. Vivamus et placerat nulla. Curabitur eget varius
      ipsum. Mauris id neque ut est cursus tincidunt.`;
}
