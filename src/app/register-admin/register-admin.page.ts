import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroService } from '../core/services/auth/registro.service';
import { CreateUserService } from '../core/services/create-user.service';
import { LocalStorageServiceService } from '../core/services/localService/local-storage-service.service';
import { MensajesService } from '../core/services/mensajes/mensajes.service';
import { RouterContrains } from '../enum/router-contrains';
import { CrearUsuario } from '../interfaces/crear-usuario/crear-usuario.interface';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.page.html',
  styleUrls: ['./register-admin.page.scss'],
})
export class RegisterAdminPage implements OnInit {

  public formulario: FormGroup;
  constructor(private fb: FormBuilder,
              private navCtrl: NavController,
              private createUser: CreateUserService,
              private mensajes: MensajesService,
              private registerUser: RegistroService,
              private localService: LocalStorageServiceService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.dataBuilder();
  }

  public dataBuilder(): void{
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      codigo: ['', Validators.required],
      email: ['admin.', Validators.required],
      password: ['', Validators.required],
    });
  }

  public registerAdmin(form): void{
    console.log(form);
    const {email,password, nombre , apellido, codigo} = form;
    this.createAdmin(email, password, nombre, apellido, codigo);
  }

  public createAdmin(email: string, password: string, nombre: string, apellido: string, codigo: string): void{
    // this.createUser.createUserEmailPw(email, password);
    const data: CrearUsuario = {
      username: nombre,
      password,
      email,
      codigo,
      apellido,
      admin: true
    };
    this.registerUser.registro(data).subscribe((resp) => {
      if(resp.jwt){
        this.mensajes.presentAlertOk(`Administrador ${resp.user.username} ${resp.user.apellido} creado correctamente`);
        this.navCtrl.navigateForward(RouterContrains.LOGIN_ADMIN);
      }else {
        this.mensajes.presentAlertOk(`Administrador ${resp.user.username} ${resp.user.apellido} no fue creado`);
      }
    });
  }
  public volver(): void{
    this.navCtrl.navigateForward('/login-admin');
  }

    //getters de validacion de formularios
    get validarNombre(): boolean {
      return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched;
    }
    get validarApellido(): boolean {
      return this.formulario.get('apellido').invalid && this.formulario.get('apellido').touched;
    }
    get validarCodigo(): boolean {
      return this.formulario.get('codigo').invalid && this.formulario.get('codigo').touched;
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
        message: `Administrador ${nombre} ${apellido} creado correctamente`,
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
              this.navCtrl.navigateForward('/login-admin');
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

    public guardarCodigoLocalStorage(codigo: string): void{
      localStorage.setItem('codigo', JSON.stringify(codigo));
    }
}
