import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sample',
  standalone: true
})
export class SamplePipe implements PipeTransform {

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
