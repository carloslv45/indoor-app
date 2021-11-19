import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterContrains } from 'src/app/enum/router-contrains';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.page.html',
  styleUrls: ['./consultar-pedido.page.scss'],
})
export class ConsultarPedidoPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public onClick(): void{
  }
  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.INICIO);
  }

}
