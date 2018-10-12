import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  numeroObsSubsc: Subscription;
  customObsSubsc: Subscription;

  constructor() { }

  ngOnInit() {
    let numeri = interval(1000).pipe(map(
        (data: number) => {
          return data * 2.5;
        }
      ));
    this.numeroObsSubsc = numeri.subscribe(
      (numero: number) => {
        console.log(numero);
      }
    );

    let myOb = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('primo pacchetto')
      }, 2000);
      setTimeout(() => {
        observer.next('secondo pacchetto')
      }, 4000);
      setTimeout(() => {
        //observer.error('non va')
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('terzo pacchetto')
      }, 6000);
    });
    myOb.subscribe(
      (data: string) => { console.log(data)},
      (error: string) => { console.log(error)},
      () => { console.log("completato")}
    );
  }

  ngOnDestroy() {
    // serve per assicurarti che, ogni volta che cambia componente (tipo anche cambi pagina web) il subscribe si blocchi,
    // altrimenti potrebbe continuare all'infinito
    this.numeroObsSubsc.unsubscribe();
    this.customObsSubsc.unsubscribe();
  }

}
