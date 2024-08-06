import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  cargada=false;

  constructor( private http: HttpClient) { 
    console.log('Servicio de pagina listo');

    // Leer archivo JSO
    this.http.get('assets/data/data-pagina.json') 
      .subscribe((res:InfoPagina) =>{
      
        this.cargada =true;
        this.info= res;

        console.log(res);
        console.log(this.cargada);
        
        
      })
  }
  
  obtenerData(){
    this.http.get
  }

}
