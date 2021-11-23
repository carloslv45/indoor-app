import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataIngreso } from 'src/app/interfaces/ingreso/data-ingreso';
import { ResultIngreso } from 'src/app/interfaces/ingreso/result-ingreso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  private server = environment.path;
  constructor(private http: HttpClient) { }


  public ingreso(data: DataIngreso): Observable<ResultIngreso>{
  return this.http.post<ResultIngreso>(`${this.server}auth/local`, data);
  }
}
