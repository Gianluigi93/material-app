import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

    // CHIMATE API

    // 1. definisco costante per iniziare (fuori dalle classi)

    // 2. importo la libreria per fare le chiamate (HttpClientModule)

    // urlMockJson è inventato come nome
    const urlMockJson = 'https://run.mocky.io/v3/531fb12c-0d72-4e98-9c49-270fb832d83b';
    const urlMockTable = 'https://run.mocky.io/v3/7274f012-3982-4cf9-b9c9-a86ba4ec7c38';


@Injectable({
    providedIn: 'root'
})

export class SharedService{

    
    constructor(private http : HttpClient) {}

    getDatiMock():Observable<any>{
        return this.http.get(urlMockJson);
    }

    getMockTable():Observable<any>{
        return this.http.get(urlMockTable);
    }

    string1 : string = 'Contenitore1';
    string2 : string = 'Contenitore2';
    string3 : string = 'Contenitore3';


    concatena(event){
        return event + this.string1 + this.string2 + this.string3
    }
   
}