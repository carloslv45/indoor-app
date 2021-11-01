import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private fireAuth: AngularFireAuth ) { }

  public createUserEmailPw(email: string, password: string): Promise<firebase.auth.UserCredential> {
   return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  public signInWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential>{
   return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
}
