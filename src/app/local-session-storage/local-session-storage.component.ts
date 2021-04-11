import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';

@Component({
  selector: 'app-local-session-storage',
  templateUrl: './local-session-storage.component.html',
  styleUrls: ['./local-session-storage.component.css']
})
export class LocalSessionStorageComponent implements OnInit {
  
  // creo una variabile string
  sessionNome: string;

  // creo una seconda variabile string
  getNomeSession : string;

  // nuova variabile string
  getCognomeLocal : string;

  constructor (public pippo : SharedService) { }

  ngOnInit(): void {
    this.pippo.getMockTable().subscribe(data=>{
      console.log(data, '<-- componente 2, servizio get');
      // valorizzo la variabile e la associo al servizio in questo caso invocato 
      this.sessionNome = data.nome
  })

}
  // creo nuovo metodo
  sessioneStorageSetItem(){
    sessionStorage.setItem("nome", this.sessionNome)
  }

  sessionStorageGetItem(){
    this.getNomeSession = sessionStorage.getItem("nome");
    console.log(this.getNomeSession, 'nome della sessione');
	}

  localStorageSetItem(){
		localStorage.setItem("cognome", "Ceglie")
	}

  localStorageGetItem(){
    this.getCognomeLocal = localStorage.getItem("cognome");
    console.log(this.getCognomeLocal, 'cognome della sessione');
	}
}
