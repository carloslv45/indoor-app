import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }


  public setjwtSetLocalStorage(jwt: string): void{
      localStorage.setItem('jwt', jwt);
  }
  public getjwtSetLocalStorage(): string{
    return  localStorage.getItem('jwt');
  }
  public removejwtSetLocalStorage(): void{
      localStorage.removeItem('jwt');
  }
  public setUserSetLocalStorage(user: string): void{
      localStorage.setItem('user', user);
  }
  public getUserSetLocalStorage(): string{
     return localStorage.getItem('user');
  }
  public removeUserSetLocalStorage(): void{
      localStorage.removeItem('user');
  }
}
