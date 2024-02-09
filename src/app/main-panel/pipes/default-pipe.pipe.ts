import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultPipe'
})
export class DefaultPipePipe implements PipeTransform {

  transform(value: string, defaultValue: string = ''): string {
    return value !== undefined ? value : defaultValue;
  }

}
