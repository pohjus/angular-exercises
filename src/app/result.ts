import { Character } from './character';

export interface Result {
  count: number;
  next: string;
  previous: string | null;
  results: Character[];
}
