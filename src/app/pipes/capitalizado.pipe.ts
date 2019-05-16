import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizado' })
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    console.log(value);
    // console.log(args);
    value = value.toLowerCase();
    const names = value.split(' ');
    if (all) {
      for (const i in names) {
        if (i) {
          names[i] = names[i][0].toUpperCase() + names[i].substr(1);
        }
      }
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1);
    }

    return names.join(' ');
  }
}
