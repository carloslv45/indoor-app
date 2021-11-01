import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { CreateUserService } from '../core/services/create-user.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
})
export class LoginUsuarioPage implements OnInit {
  public formulario: FormGroup;
  constructor(private navCtrl: NavController,
              private fb: FormBuilder,
              public alertController: AlertController,
              private loginUserSer: CreateUserService) { }

  ngOnInit() {
    this.dataBuilder();
  }


  public dataBuilder(): void{
    this.formulario = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //ingresar con login normal
    public loginUser(form): void {
      console.log(form);
      const email = form.email;
      console.log(email.split('.')[0]);
      if(email.split('.')[0] !== 'admin'){
        this.loginUsers(form.email, form.password);
      }else {
        this.presentAlertErr('Esto es un correo de administrador no puede iniciar sesion');
      }
  }

  //ingreso de session de google
  public google(): void {
  }

// registrar un usuario
  public registrarseUser(): void {
    this.navCtrl.navigateForward('/register-usuario');
  }

  //para volver a la pagina de roles de ingreso
  public volver(): void {
    this.navCtrl.navigateForward('/tabs/tab2');
  }

  //getters de validacion de formularios
  get validarEmail(): boolean {
    return this.formulario.get('email').invalid && this.formulario.get('email').touched;
  }
  get validarPassword(): boolean {
    return this.formulario.get('password').invalid && this.formulario.get('password').touched;
  }

  public loginUsers(email: string, password: string): void {
    this.loginUserSer.signInWithEmailAndPassword(email, password).then(result => {
      console.log(result);
      this.presentAlertOk(result.operationType);
    }).catch(err => {
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

}
