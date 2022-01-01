import { Component } from '@angular/core';

@Component({
  selector: 'my-selector',
  template: `<h1>Hello {{ title }}</h1>
    <loremlipsum></loremlipsum>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'from Angular!';
  loremlipsum: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus
      euismod nulla in porta. Aliquam sollicitudin neque nulla, sit amet dictum
      erat dictum a. Phasellus eget dui nisl. Vivamus tempus felis ut sodales
      sodales. Proin laoreet tortor eget turpis volutpat, eu pulvinar sem
      euismod. Vestibulum et congue massa. Aenean ex ligula, egestas vitae
      turpis in, condimentum pulvinar risus. Nam ultrices elit sit amet lectus
      convallis placerat. Vivamus et placerat nulla. Curabitur eget varius
      ipsum. Mauris id neque ut est cursus tincidunt.`;
}
