import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Devextreme1Component } from './devextreme1/devextreme1.component';

import { DxButtonModule, DxDataGridModule, DxTreeListModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    Devextreme1Component
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxTreeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
