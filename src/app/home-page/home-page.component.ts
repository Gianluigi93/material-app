import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // dichiaro le variabili
  input1 : any; // any indica che una variabile può essere di qualsiasi valore
  input2 : any;
  input3 : any;


  // public --> nome del file ts e nome della classe
  constructor( public sharedService : SharedService ) { }

  // al caricamento della nostra applicazione, viene eseguito tutto quello che è scritto nella nostra applicazione
  ngOnInit(): void {
    console.log(this.sharedService.concatena("ciao "));

    // 7 invoco il metodo
    this.getdati();
  };

  // CASO 1, creo 3 metodo per 3 bottoni

  /*
  aggiornaValore1(element){
    this.sharedService.string1 = element
  }
  aggiornaValore2(element){
    this.sharedService.string2 = element
  }
  aggiornaValore3(element){
    this.sharedService.string3 = element  
  }
  */

  // CASO 2 creo un unco metodo per i 3 bottoni e gioco con le condizioni

  aggiornaValore(element){
    // se il valore che passo al metodo è uguale al valore del gnModel
    if (element === this.input1){
      this.sharedService.string1 = this.input1
    } 
    else if (element === this.input2){
      this.sharedService.string2 = this.input2
    } 
    else if (element === this.input3){
      this.sharedService.string3 = this.input3
    }
  };

  // 6.0 faccio il subscribe
  // creo un metodo this.sharedService. (nome utilizzo il metodo crato prima) .subscribe(variabile d'appoggio arrow function)
  // qualsiasi chiamata get, post, put, delate si fa in questo modo
  getdati(){
    this.sharedService.getDatiMock().subscribe(data=>{
      console.log(data,'MOCK RESPONSE')
    })
  }
}
