import { Component, enableProdMode, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Customer, DevExtremeServiceService, Employee } from '../service/dev-extreme-service.service';
//import { Devextreme1Component } from './devextreme1/devextreme1.component';
import CustomStore from 'devextreme/data/custom_store';



if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DevExtremeServiceService]
})
export class AppComponent implements OnInit {
  customers: Customer[];
  datiDevExpress: any;
  datiDaJsonTyl: any;
  datiDaJsonTyl3: any;
  employees: Employee[];
  articolo: string;
  TitoloDaAggiungereAlPopUp: string;
  nameUser: string;
  messaggioTrasmessoInOutput: string;
  objectKeys = Object.keys;
  objectValues = Object.values;
  objectEntries = Object.entries;

  mostraTitoloOutput(messaggioTrasmesso: string) {
      this.messaggioTrasmessoInOutput = messaggioTrasmesso;
  }

  constructor(public service: DevExtremeServiceService, private http: HttpClient) {
    this.employees = service.getEmployees();

    this.customers = service.getCustomers();
    this.datiDevExpress = service.getDataSource();
    this.datiDaJsonTyl = service.getDataSource2();

    /* Esercitazione Input e Output */
    this.articolo = "Titolo passato in Input dal genitore";
    this.TitoloDaAggiungereAlPopUp = "Titolo da Aggiungere al PopUp";
    this.nameUser = "Enrico";
    this.messaggioTrasmessoInOutput;    
    }
    
  ngOnInit() {
      
    //this.UserService.changeShowForm.subscribe(showFormVar => this.showForm = showFormVar);
  this.service.getPeople().subscribe(
    risposta => 
    {
      console.log("risposta", risposta);
        return this.datiDaJsonTyl3 = risposta;
    }
  );
  }

}
