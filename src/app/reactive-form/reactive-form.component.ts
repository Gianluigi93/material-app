import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // instanzio un nuovo form control
  nome = new FormControl('',[Validators.required, Validators.maxLength(10), Validators.pattern('')]);
  eta = new FormControl();
  paese = new FormControl({value: 'Italia', disabled: true})

  // creo form per i ControlFormName
  utenteForm = new FormGroup({
    // form control che appartengono al form group
    nome: new FormControl('Gianluigi', Validators.maxLength(10)),
    cognome : new FormControl(),
    eta : new FormControl(27),
    citta : new FormControl('Bari'),
    paese : new FormControl('Italia')
  })

  constructor() { }

  get c(){ // c può essere anche pippo
    return this.utenteForm.controls;
  }

  ngOnInit(): void {
  }

	setName(){
		this.nome.setValue('Gianluigi');
    console.log(this.nome.value); // leggo il form control con il .value obbligatorio
    //console.log(this.nome)  resituirà un object
    this.paese.enable();
	}

  setResetName(){
    this.nome.reset();
    this.paese.disable();
  }

  onFormSubmit(){
    console.log('Nome:' + this.c.nome.value);//.utenteForm.get('nome').value);
    console.log('Cognome:' + this.utenteForm.get('cognome').value);
    console.log('Età:' + this.utenteForm.get('eta').value);
    console.log('Città:' + this.utenteForm.get('citta').value);
    console.log('Paese:' + this.utenteForm.get('paese').value);
  }

}
