import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-app';

  // istanzio una variabile e la tiposso e la rendo uguale a stringa vuota
  testo : string = "";


  test(): boolean{
    if ( this.testo.length == 4 || this.testo.length > 10  ){
      return true;
    }
    else {
      return false
    }
  }

  alert:string ="Ti è piaciuto questo elemento"
  popola(){
    alert(this.alert);
  }
}

