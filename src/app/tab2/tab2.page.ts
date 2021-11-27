import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navCtrl: NavController) {}


  public volver(): void{
    this.navCtrl.navigateForward('/tabs/tab1');
  }

  public ingresoUsuario(): void{
    this.navCtrl.navigateForward('/login-usuario');
  }
  public ingresoAdmin(): void{
    this.navCtrl.navigateForward('/login-admin');
  }
  public ingresoOperador(): void{
    this.navCtrl.navigateForward('/operadores');
  }
}
