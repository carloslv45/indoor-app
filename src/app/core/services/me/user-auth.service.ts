import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultMe } from 'src/app/interfaces/me/result-me';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private server = environment.path;
  constructor(private http: HttpClient) { }


  public me(jwt: string, user: number): Observable<ResultMe>{
    const header = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
  return this.http.get<ResultMe>(`${this.server}users/${user}`, {headers: header});
  }
}
