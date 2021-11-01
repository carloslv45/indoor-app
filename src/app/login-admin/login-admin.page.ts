import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { CreateUserService } from '../core/services/create-user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {

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
      password: ['', [Validators.required, Validators.minLength(6)]],
      codigo: ['', Validators.required],
    });
  }

  //ingresar con login normal
    public loginAdmin(form): void {
      console.log(form);
      const email = form.email;
      console.log(email.split('.')[0]);
      if(email.split('.')[0] === 'admin'){
        this.loginAdmins(form.email, form.password);
      }else {
        this.presentAlertErr('El correo debe tener "admin." para ingresar como administrador');
      }
  }

  //ingreso de session de google
  public google(): void {
  }

  public registrarseAdmin(): void {
    this.navCtrl.navigateForward('/register-admin');
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
  get validarCodigo(): boolean {
    return this.formulario.get('codigo').invalid && this.formulario.get('codigo').touched;
  }

  public loginAdmins(email: string, password: string): void {
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
