import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // creo una variabile
  euro = 0;

  // creo una variabile vuota per l'output
  testoGrazie = '';

  constructor() { }

  ngOnInit(): void {
  }

  // creo un metodo
  inviaAChild(){
    //incremento la variabile
    this.euro++;
    console.log(this.euro)
  }

  // creo un metodo
  ringraziaParent(event){
    console.log(event);
    this.testoGrazie = event;
  }

}
