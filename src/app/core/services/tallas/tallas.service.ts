import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseTallas } from 'src/app/interfaces/tallas/response-tallas';
import { environment } from 'src/environments/environment';
import { MensajesService } from '../mensajes/mensajes.service';

@Injectable({
  providedIn: 'root'
})
export class TallasService {
  public server = environment.path;
  public httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    })
  };
  constructor(private http: HttpClient) { }

  public obtenerTallas(): Observable<ResponseTallas[]>{
    return this.http.get<ResponseTallas[]>(`${this.server}tallas` , this.httpOptions);
  }

}
