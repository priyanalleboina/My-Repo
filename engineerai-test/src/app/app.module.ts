import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDataComponent } from './table-data/table-data.component';
import { HttpClientModule} from '@angular/common/http';
import { GetdataserviceService } from './getdataservice.service';
import { SearchpipePipe } from './searchpipe.pipe';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    SearchpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetdataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
