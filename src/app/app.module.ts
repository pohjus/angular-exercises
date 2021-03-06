import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MyService } from './myservice.service';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoremComponent } from './loremlipsum/loremlipsum.component';
import { InfotextComponent } from './infotext/infotext.component';
import { PalindromecheckerComponent } from './palindromechecker/palindromechecker.component';
import { ClockComponent } from './clock/clock.component';
import { CountdownComponent } from './countdown/countdown.component';
import { LampComponent } from './lamp/lamp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoremComponent,
    InfotextComponent,
    PalindromecheckerComponent,
    ClockComponent,
    CountdownComponent,
    LampComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [MyService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
