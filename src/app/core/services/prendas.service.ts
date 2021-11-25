/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Prendas } from 'src/app/interfaces/crear-prendas/crear-prendas.interface';
import { ResponsePrendas } from 'src/app/interfaces/crear-prendas/response-prendas';
import { ResponsePrendasGet } from 'src/app/interfaces/crear-prendas/response-prendas-get';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrendasService {
  public server = environment.path;
  public httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type':  'application/json',
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    })
  };
  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  public crearPrendas(prendas: Prendas){
   return this.firestore.collection('prendas').add(prendas);
  }

  public crearPrendas$(prenda: Prendas): Observable<ResponsePrendas>{
   return this.http.post<ResponsePrendas>(`${this.server}prendas`, prenda, this.httpOptions);
  }

  public obtenerPrendas$(): Observable<ResponsePrendasGet[]>{
      return this.http.get<ResponsePrendasGet[]>(`${this.server}prendas`, this.httpOptions);
  }


}
