import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EspesificacionData } from 'src/app/interfaces/espesificaciones/especificaciones-data';
import { ResponseEspecifiacion } from 'src/app/interfaces/espesificaciones/response-especificaicon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {

  public server = environment.path;
  public httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    })
  };
  constructor(private http: HttpClient) { }


  public postEspecificaciones(data: EspesificacionData): Observable<ResponseEspecifiacion>{
    return this.http.post<ResponseEspecifiacion>(`${this.server}especificacions` , data, this.httpOptions);
  }
  public getEspecificaciones(id: number): Observable<ResponseEspecifiacion[]>{
    return this.http.get<ResponseEspecifiacion[]>(`${this.server}especificacions?pedido=${id}` , this.httpOptions);
  }

}
