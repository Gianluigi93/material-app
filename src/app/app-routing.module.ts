import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioComponenteComponent } from './dettaglio-componente/dettaglio-componente.component';
import { HomePageComponent} from './home-page/home-page.component';
import { MaterialeAngularComponent} from './materiale-angular/materiale-angular.component';
import { InformaticaComponent } from './informatica/informatica.component';
import { CucinaComponent } from './cucina/cucina.component';
import { AbbigliamentoComponent } from './abbigliamento/abbigliamento.component'
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LocalSessionStorageComponent } from './local-session-storage/local-session-storage.component';


const routes: Routes = [
  //GUARDA QUI --> UNICA OPERAZIONE DA FARE IN QUESTO FILE PER IL ROUTING
  // nell html scrivo [routerLink] = "['/dettaglio-componente']"
  { path: "dettaglio-componente" , component: DettaglioComponenteComponent },
  { path: "" , component: HomePageComponent},
  { path: "materiale-angular", component: MaterialeAngularComponent },
  
  { path: "informatica" , component: InformaticaComponent},
  { path: "cucina" , component: CucinaComponent },
  { path: "abbigliamento" , component: AbbigliamentoComponent},
  { path: "parent" , component: ParentComponent},
  { path: "reactive-form" , component: ReactiveFormComponent},
  { path: "local-session" , component: LocalSessionStorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
