
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  headers = new HttpHeaders();

  beaererAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYyODQ5NzgyMywiZXhwIjoxNjI5MzYxODIzfQ.mU796ppkjSNi4JKvD0-rWy9UuSUTzza3f3Ru8PF55L9XzO1n9Af_o4mK4XjQQcFE-Zxd9SYG63mbyYhgUqrFoA'



  

  constructor(
    private http: HttpClient
    ) { 
      this.headers = this.headers.set("Authorization", 'Bearer ' + this.beaererAuth).set("X-TENANT-ID", 'fe_0321');

    }

    getAllClienti() {
      return this.http.get<any>(environment.urlAPI + '/api/clienti?page=0&size=20&sort=id,ASC', {headers: this.headers});


    } 

    getCliente(id: number) {
      return this.http.get(environment.urlAPI + '/api/clienti/' +id, {headers: this.headers} )

    }

    deleteCliente(id: number) {
      return this.http.delete(environment.urlAPI + '/api/clienti/' +id, {headers: this.headers} )

    }
    updateCliente(cliente: any) {
      return this.http.put(environment.urlAPI + '/api/clienti/' +cliente.id, cliente, {headers: this.headers} )

    }

    createCliente(cliente: any) {

      return this.http.post(environment.urlAPI + '/api/clienti/', cliente, {headers: this.headers} );

    }

 
}
