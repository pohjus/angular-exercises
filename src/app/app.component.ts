import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice.service';

import { Character } from './character';
import { Result } from './result';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'from Angular!';
  isVisible = true;
  locale = '';
  lamptoggle = false;

  characters: Character[] = [];

  http: MyService;

  constructor(http: MyService) {
    this.http = http;
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  done(event: string): void {
    this.lamptoggle = true;
  }

  ngOnInit(): void {
    this.http.get<Character>('https://swapi.dev/api/people/1', (jsonObject) => {
      this.title = jsonObject.name;
    });
  }
}
