import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // consente di passare tramite evento il valore al child
  @Input() euroCount;

  // consente di passare tramite evento il valore al parent
  @Output() grazie : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // realizzo un metodo per lanciare un valore fuori dal componente child
  ringraziaParent(){
    this.grazie.emit('Grazie')
  }

}
