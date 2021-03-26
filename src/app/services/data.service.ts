import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getClient()
  {

    return this.http.get('http://cmarte-001-site1.gtempurl.com/api/Cliente/GetListClient');

  }

  sendPostRequest() {
    //var headers = new Headers();
    //headers.append("Accept", 'application/json');
    //headers.append('Content-Type', 'application/json' );
    //const requestOptions = new HttpParamsOptions({ headers: headers });

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    const httpOptioens = {
      headers: new HttpHeaders({
          "Accept": "application/json" , 
          "Content-Type": "application/json" ,
          "Host": "cmarte-001-site1.gtempurl.com",
          "Access-Control-Allow-Origin": "*", 
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With",
          "Access-Control-Allow-Credentials" : "true",
          "Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT"  
         }) 
  };  

    let postData = {
      "Nombre": "Pedro",
      "Apellidos": "Martinez",
      "DocumentoIdentidad": "40226944128",
      "EstadoCivilId": 1,
      "Estado": 0,
      "FechaNacimiento": "1900-01-01T00:00:00",
      "LimitePrestamo": 5000,
      "Telefono": "849-878-1966",
      "Celular": "809-878-1966",
      "Gmail": "preuab01@gmail.com",
      "Prestamos": null,
      "EstadoCivil": "Sortero"
  }

  this.http.post("http://cmarte-001-site1.gtempurl.com/api/Cliente/CreateClient/", postData,httpOptioens)
    .subscribe(data => {
      console.log();
     }, error => {
      console.log(error);
    });
  }

}
