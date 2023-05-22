import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    let voyeles = ["a", "e", "y", "u", "i", "o"];
    let result = "";
    let x = "";
    for (let i = 0; i < ch.length; i++) {
      x = ch[i];
      for (let j = 0; j < voyeles.length; j++) {
        if (ch[i].toLowerCase() == voyeles[j]) {
          x = "*";
          break;
        }
      }
      result = result + x;
    }
    return result;
  }

}
