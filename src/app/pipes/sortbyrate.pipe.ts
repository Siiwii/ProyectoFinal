import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbyrate'
})
export class SortbyratePipe implements PipeTransform {

  transform(array: Array<any>, args: any): Array<any> {
    array.sort((a:any, b:any) => {
      if ( a[args] > b[args] ){
        return -1;
      } else if ( a[args] < b[args] ){
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
