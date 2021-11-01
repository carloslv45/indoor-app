import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { CreateUserService } from '../core/services/create-user.service';

@Component({
  selector: 'app-register-usuario',
  templateUrl: './register-usuario.page.html',
  styleUrls: ['./register-usuario.page.scss'],
})
export class RegisterUsuarioPage implements OnInit {
  public formulario: FormGroup;
  constructor(private fb: FormBuilder,
              private navCtrl: NavController,
              private createUser: CreateUserService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.dataBuilder();
  }

  public dataBuilder(): void{
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public registerUser(form): void{
    console.log(form);
    const {email,password, nombre , apellido} = form;
    this.createUsers(email, password, nombre, apellido);
  }

  public createUsers(email: string, password: string, nombre: string, apellido: string): void{
    this.createUser.createUserEmailPw(email, password).then(result => {
      console.log(result);
      if(result.additionalUserInfo.isNewUser){
        this.presentAlertOk(nombre, apellido);
      }
    }).catch(err => {
      console.log(err);
      this.presentAlertErr(err.message);
    });
  }
  public volver(): void{
    this.navCtrl.navigateForward('/login-usuario');
  }
  //getters de validacion de formularios
  get validarNombre(): boolean {
    return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched;
  }
  get validarApellido(): boolean {
    return this.formulario.get('apellido').invalid && this.formulario.get('apellido').touched;
  }
  get validarEmail(): boolean {
    return this.formulario.get('email').invalid && this.formulario.get('email').touched;
  }
  get validarPassword(): boolean {
    return this.formulario.get('password').invalid && this.formulario.get('password').touched;
  }

  async presentAlertOk(nombre, apellido) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: `Usuario ${nombre} ${apellido} creado correctamente`,
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
            this.navCtrl.navigateForward('/login-usuario');
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
