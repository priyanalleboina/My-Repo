import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(listdata: any, searchvalue: string): any {
    if(!searchvalue) {
      return listdata;
    }
    return listdata.filter((searchoflistdata) => {
      return searchoflistdata.title.toLowerCase().match(searchvalue.toLowerCase());
    });
  }

}
