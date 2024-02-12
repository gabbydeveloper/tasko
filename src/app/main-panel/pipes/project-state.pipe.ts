import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectStatePipe'
})
export class ProjectStatePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'ACT':
        return 'Active';
      case 'INA':
        return 'Inactive';
      default:
        return 'Unknown';
    }
  }
}
