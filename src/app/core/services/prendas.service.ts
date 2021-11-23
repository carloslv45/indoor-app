import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Prendas } from 'src/app/interfaces/crear-prendas/crear-prendas.interface';

@Injectable({
  providedIn: 'root'
})
export class PrendasService {

  constructor(private firestore: AngularFirestore) { }

  public crearPrendas(prendas: Prendas){
   return this.firestore.collection('prendas').add(prendas);
  }
}
