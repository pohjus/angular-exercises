import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoremComponent } from './loremlipsum/loremlipsum.component';
import { InfotextComponent } from './infotext/infotext.component';

@NgModule({
  declarations: [AppComponent, LoremComponent, InfotextComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
