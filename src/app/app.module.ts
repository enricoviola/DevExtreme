import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Angular Material imports
import {MatChipsModule} from '@angular/material/chips';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { Devextreme1Component } from './devextreme1/devextreme1.component';

import { DxButtonModule, DxDataGridModule, DxTreeListModule } from 'devextreme-angular';
import { PopupComponent } from './popup/popup.component';
import { PopUpMaterialComponent, DialogMaterial } from './pop-up-material/pop-up-material.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Devextreme1Component,
    PopupComponent,
    PopUpMaterialComponent, DialogMaterial, NavbarComponent
  ],
  //The entryComponents array is used to define only components that are not found in html and created dynamically with ComponentFactoryResolver. Angular needs this suggerimento to find them and compile. All other components should just be listed in the declarations array.
  entryComponents: [DialogMaterial],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxTreeListModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);