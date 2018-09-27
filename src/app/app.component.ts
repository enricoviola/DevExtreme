import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { Customer, DevExtremeServiceService } from '../service/dev-extreme-service.service';
//import { Devextreme1Component } from './devextreme1/devextreme1.component';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DevExtremeServiceService]
})
export class AppComponent {
  title = 'DevExtremeTest';
  customers: Customer[];

  constructor(service: DevExtremeServiceService) {
    this.customers = service.getCustomers();
  }
}
