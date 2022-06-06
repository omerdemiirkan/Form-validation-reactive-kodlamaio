import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {

  transform(value: number, percentage: number): number {
    if(value===undefined){
      value=18
    }
    return value * percentage / 100
  }

}
