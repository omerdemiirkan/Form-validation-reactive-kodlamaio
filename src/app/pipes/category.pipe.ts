import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Category[], filterText:string): Category[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:Category)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
