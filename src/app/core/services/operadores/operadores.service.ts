/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseOperadores } from 'src/app/interfaces/operadores/result-operadores';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperadoresService {

  public server = environment.path;
  public httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    })
  };
  constructor(private http: HttpClient) { }

  public obtenerOperadores(): Observable<ResponseOperadores[]>{
    return this.http.get<ResponseOperadores[]>(`${this.server}operadores`);
  }
}
