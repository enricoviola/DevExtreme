import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeListModule } from 'devextreme-angular';

import { Employee, DevExtremeServiceService } from '../../service/dev-extreme-service.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
  selector: 'app-devextreme1',
  templateUrl: './devextreme1.component.html',
  styleUrls: ['./devextreme1.component.css'],
  providers: [DevExtremeServiceService]
})

export class Devextreme1Component implements OnInit {
  employees: Employee[];

  @Input() articolo: string;
  @Output() titleEmitter = new EventEmitter<string>();

  ngOnInit() {
    this.titleEmitter.emit("Dato inviato in Output");
  }

  constructor(DevExtremeServiceService: DevExtremeServiceService) {
      this.employees = DevExtremeServiceService.getEmployees();
  }
}
