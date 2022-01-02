import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice.service';

import { Character } from './character';
import { Result } from './result';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  done(event: string): void {
    this.lamptoggle = true;
  }

  ngOnInit(): void {
    const observable: Observable<Result> = this.http.get<Result>(
      'https://swapi.dev/api/people/'
    );

    observable.subscribe((data) => (this.characters = data.results));
  }
}
