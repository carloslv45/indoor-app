import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrearUsuario } from 'src/app/interfaces/crear-usuario/crear-usuario.interface';
import { ResultRegistro } from 'src/app/interfaces/crear-usuario/result-registro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
    private server = environment.path;
  constructor(private http: HttpClient) { }


  public registro(data: CrearUsuario): Observable<ResultRegistro>{
  return this.http.post<ResultRegistro>(`${this.server}auth/local/register`, data);
  }
}
