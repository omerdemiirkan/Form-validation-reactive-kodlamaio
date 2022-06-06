import { Product } from 'src/app/models/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
