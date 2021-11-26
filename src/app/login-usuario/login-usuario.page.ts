import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { IngresoService } from '../core/services/auth/ingreso.service';
import { CreateUserService } from '../core/services/create-user.service';
import { LocalStorageServiceService } from '../core/services/localService/local-storage-service.service';
import { MensajesService } from '../core/services/mensajes/mensajes.service';
import { RouterContrains } from '../enum/router-contrains';
import { DataIngreso } from '../interfaces/ingreso/data-ingreso';

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
              private ingresoService: IngresoService,
              private mensajes: MensajesService,
              private localService: LocalStorageServiceService,
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
      const {email, password} = form;
      const data: DataIngreso = {
        identifier: email,
        password
      };
      this.ingresoService.ingreso(data).subscribe((resp) => {
        if(resp){
          console.log(resp);
          this.localService.setjwtSetLocalStorage(resp.jwt);
          this.localService.setUserSetLocalStorage(JSON.stringify(resp.user.id));
          this.navCtrl.navigateForward(RouterContrains.INICIO);
          this.mensajes.presentAlertErr(`Bienvenido ${resp.user.username} ${resp.user.apellido}`);
        }
      }, (err) => {
        this.mensajes.presentAlertErr('Error de datos de servidor');
      });

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
    this.loginUserSer.signInWithEmailAndPassword(email, password);
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
