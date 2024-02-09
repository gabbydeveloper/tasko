import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultNumberPipe'
})
export class DefaultNumberPipePipe implements PipeTransform {

  transform(value: number, defaultValue: number): number {
    return value !== undefined ? value : defaultValue
  }

}
