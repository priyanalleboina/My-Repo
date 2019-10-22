import { Component, OnInit } from '@angular/core';
import { GetdataserviceService } from '../getdataservice.service';
import {  timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  periodicaldata:any;
  listdata:any;
  modallistdata;
  constructor(private getdataservice:GetdataserviceService) { }

  ngOnInit() {
    this.getdataservice.getdata().subscribe((resp:any)=>{
      console.log(resp.hits);
    })
    this.periodicaldata = timer(0, 10000).pipe(
      switchMap(() => this.getdataservice.getdata())
    ).subscribe((resp:any)=>{
       this.listdata =resp.hits;
       console.log(this.listdata);
    }); 
  }
  openmodal(list){
    this.modallistdata=list;

  }
  ngOnDestroy(){
   this.periodicaldata.unsbscribe();
  }

}
