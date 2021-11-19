import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterContrains } from 'src/app/enum/router-contrains';

@Component({
  selector: 'app-consultar-referencia',
  templateUrl: './consultar-referencia.page.html',
  styleUrls: ['./consultar-referencia.page.scss'],
})
export class ConsultarReferenciaPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public crearReferencia(): void{
  }
  public volver(): void{
      this.navCtrl.navigateForward(RouterContrains.INICIO);
  }

}
