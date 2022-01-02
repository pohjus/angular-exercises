import { Injectable } from '@angular/core';

import { Character } from './character';
import { Result } from './result';

@Injectable()
export class MyService {
  giveSomething(): string {
    return 'hello world';
  }

  fetch(): Character[] {
    return [{ name: 'luke' }, { name: 'jack' }];
  }

  get<T>(url: string, callback: (data: T) => void): void {
    fetch(url)
      .then((hr) => hr.json())
      .then((data) => callback(data));
  }
}
