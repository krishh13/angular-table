import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpiritComponent } from './spirit/spirit.component';
import { AmericanComponent } from './american/american.component';
import { DeltaComponent } from './delta/delta.component';
import { SouthWestComponent } from './south-west/south-west.component';
import { TableGenericComponent } from './table-generic/table-generic.component';

@NgModule({
  declarations: [
    AppComponent,
    SpiritComponent,
    AmericanComponent,
    DeltaComponent,
    SouthWestComponent,
    TableGenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
