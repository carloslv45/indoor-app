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
  public obtenerOperador(operador: string): Observable<ResponseOperadores[]>{
    const resouce = `operadores?url=${operador}`;
    return this.http.get<ResponseOperadores[]>(`${this.server}${resouce}`, this.httpOptions);
  }
  public updateFechaInicio(idOperador: number, fechaInicio: any): Observable<ResponseOperadores[]>{
    const resouce = `operadores/${idOperador}`;
    return this.http.put<ResponseOperadores[]>(`${this.server}${resouce}`, fechaInicio ,this.httpOptions);
  }
  public updateFechaFin(idOperador: number, fechaFin: any): Observable<ResponseOperadores[]>{
    const resouce = `operadores/${idOperador}`;
    return this.http.put<ResponseOperadores[]>(`${this.server}${resouce}`, fechaFin ,this.httpOptions);
  }
}
