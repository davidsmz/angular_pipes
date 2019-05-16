import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'password' })
export class PasswordPipe implements PipeTransform {
  transform(value: string, status: boolean = false): string {
    return status ? value : value.replace(/./gi, '*');
  }
}
