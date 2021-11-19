import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
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
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.INICIO);
  }
  public loadImageFromDevice(event): void{
  }
}
