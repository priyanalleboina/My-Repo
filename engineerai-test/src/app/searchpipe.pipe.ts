import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(listdata: any, searchvalue: string): any {
    if(!searchvalue) {
      return listdata;
    }
    return listdata.filter((lock) => {
      return lock.title.toLowerCase().match(searchvalue.toLowerCase());
    });
  }

}
