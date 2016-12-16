export class Timerow {
  day: string;
  project: string;
  from: {hh: number, mm: number};
  to: {hh: number, mm: number};
  pause: {hh: number, mm: number};
  spent: {hh: number, mm: number};
  comment: string;
}
