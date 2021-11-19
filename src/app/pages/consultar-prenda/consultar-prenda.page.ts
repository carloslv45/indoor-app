import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterContrains } from 'src/app/enum/router-contrains';

@Component({
  selector: 'app-consultar-prenda',
  templateUrl: './consultar-prenda.page.html',
  styleUrls: ['./consultar-prenda.page.scss'],
})
export class ConsultarPrendaPage implements OnInit {
  public contador = 0;
  public contenedorArr: number[] = [];
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public addReferencia(): void{
    this.contenedorArr = [];
    this.contador += 1;
    console.log(this.contador);
    for(let i = 1; i <=  this.contador; i++){
        this.contenedorArr.push(i);
    }
  }

  public crearPrenda(): void{
  }
  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.INICIO);
  }
}
