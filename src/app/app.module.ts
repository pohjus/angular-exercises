import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoremComponent } from './loremlipsum/loremlipsum.component';
import { InfotextComponent } from './infotext/infotext.component';
import { PalindromecheckerComponent } from './palindromechecker/palindromechecker.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    LoremComponent,
    InfotextComponent,
    PalindromecheckerComponent,
    ClockComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
