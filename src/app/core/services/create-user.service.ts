import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  public uid: string;
  public codigo: string;
  constructor(
    private fireAuth: AngularFireAuth ,
    public alertController: AlertController,
    private router: Router,
    private navCtrl: NavController) { }

  public createUserEmailPw(email: string, password: string): Promise<firebase.auth.UserCredential> {
   return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  public signInWithEmailAndPassword(email: string, password: string, codigo?: string){
    return this.fireAuth.signInWithEmailAndPassword(email, password).then(result => {
    console.log(result.user);
    this.uid = result.user.uid;
    this.codigo = codigo;
    this.validarUid(this.uid, result.user.email);
    this.presentAlertOk(result.operationType);
    }).catch(err => {
      this.validarUid('', null);
    console.log(err);
    this.presentAlertErr(err.message);
     });


}

async presentAlertOk(messages) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Subtitle',
    message: messages,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });
  await alert.present();
}
async presentAlertErr(messages) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Subtitle',
    message: messages,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });
  await alert.present();
}

public validarUid(uid: string, user: any): boolean {
  if(uid !== ''){
    console.log(true);
    console.log('user: ' + user);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/inicio']);
    return true;
  }else{
    if(this.codigo === undefined){
      this.router.navigateByUrl('/login-usuario');
    }else{
      this.router.navigateByUrl('/login-admin');
    }
    console.log(false);
    return false;
  }
}
}
