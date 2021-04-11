import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DettaglioComponenteComponent } from './dettaglio-componente/dettaglio-componente.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialeAngularComponent } from './materiale-angular/materiale-angular.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InformaticaComponent } from './informatica/informatica.component';
import { CucinaComponent } from './cucina/cucina.component';
import { AbbigliamentoComponent } from './abbigliamento/abbigliamento.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';
import { LocalSessionStorageComponent } from './local-session-storage/local-session-storage.component';


@NgModule({
  declarations: [
    AppComponent,
    DettaglioComponenteComponent,
    HomePageComponent,
    MaterialeAngularComponent,
    InformaticaComponent,
    CucinaComponent,
    AbbigliamentoComponent,
    ChildComponent,
    ParentComponent,
    ReactiveFormComponent,
    FormComponent,
    LocalSessionStorageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    HttpClientModule, // chiamate API
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
