import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RouterContrains } from 'src/app/enum/router-contrains';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.page.html',
  styleUrls: ['./crear-cliente.page.scss'],
})
export class CrearClientePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.INICIO);
  }
}
