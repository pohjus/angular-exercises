import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrls: ['./palindromechecker.component.css'],
})
export class PalindromecheckerComponent implements OnInit {
  palindrome: string = '';
  reversed: string = '';

  reverse(text: string): string {
    this.reversed = text.split('').reverse().join('').toLowerCase();
    return this.reversed;
  }

  ifPalindrome(): boolean {
    return this.palindrome.toLowerCase() === this.reversed;
  }

  checkIfPalindrome(): string {
    return this.ifPalindrome() ? 'Yes' : 'No';
  }
  constructor() {}

  ngOnInit(): void {}
}
