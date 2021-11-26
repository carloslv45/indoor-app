/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RegistroService } from 'src/app/core/services/auth/registro.service';
import { CreateUserService } from 'src/app/core/services/create-user.service';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { CrearUsuario } from 'src/app/interfaces/crear-usuario/crear-usuario.interface';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.page.html',
  styleUrls: ['./crear-cliente.page.scss'],
})
export class CrearClientePage implements OnInit {
  public formulario: FormGroup;
  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private registroService: RegistroService,
    private mensajeService: MensajesService
    ) { }

  ngOnInit() {
    this.formBuilder();
  }


  public formBuilder(): void{
    this.formulario = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.minLength(10)]],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get validPasswordMin(): boolean{
    return this.formulario.controls['password'].hasError('minlength');
  }

  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.INICIO);
  }

  public crearUsuario(data: CrearUsuario): void{
    const dataUser: CrearUsuario = {
      username: data.nombre,
      cedula: data.cedula,
      email: data.email,
      celular: data.celular,
      direccion: data.direccion,
      ciudad: data.ciudad,
      password: data.password,
      admin: false
    };

    this.registroService.registro(dataUser).subscribe((resp) => {
      if(resp.user){
        this.mensajeService.presentAlertOk(`Se ha creado el usuario ${resp.user.username}`);
        this.formulario.reset();
      }else{
        this.mensajeService.presentAlertOk(`Error al crear el usuario ${resp.user.username}`);
      }
    }, (err) => {
      console.log(err);
      if(err.error.message[0].messages[0].message === 'Email is already taken.'){
        this.mensajeService.presentAlertErr(`El correo ya esta registrado`);
      }else if(err.error.message[0].messages[0].message === 'Email already taken'){
        this.mensajeService.presentAlertErr(`La cedula ya esta registrada`);
      }
    });
  }
}
