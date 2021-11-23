import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { DateTime } from 'luxon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
  public formulario: FormGroup;
  public fechaCreacion = DateTime.now();
  public prendas = [
    {
      id: 1,
      name: 'prenda1'
    },
    {
      id: 2,
      name: 'prenda2'
    },
    {
      id: 3,
      name: 'prenda3'
    }
  ];
  public referencias = [
    {
      id: 1,
      name: 'referencia1'
    },
    {
      id: 2,
      name: 'referencia2'
    },
    {
      id: 3,
      name: 'referencia3'
    }
  ];
  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.dataBuilder();
  }

  public dataBuilder(): void{
    this.formulario = this.fb.group({
      fechaCreaciones: [this.fechaCreacion.toLocaleString()],
      idCliente: ['', Validators.required],
      prenda: ['', Validators.required],
      referencia: ['', Validators.required]
    });
  }

  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.INICIO);
  }
  public loadImageFromDevice(event): void{
  }

  public crearPedido(data): void{
    console.log(data);
  }
}
