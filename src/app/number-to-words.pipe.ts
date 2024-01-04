// number-to-words.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import * as numberToWords from 'number-to-words';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) {
      return 'Zero';
    }

    return numberToWords.toWords(value);
  }
}
