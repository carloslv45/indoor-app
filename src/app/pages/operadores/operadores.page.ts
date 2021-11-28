import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { OperadoresService } from 'src/app/core/services/operadores/operadores.service';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { ResponseOperadores } from 'src/app/interfaces/operadores/result-operadores';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.page.html',
  styleUrls: ['./operadores.page.scss'],
})
export class OperadoresPage implements OnInit {
  public operadores$: Observable<ResponseOperadores[]>;
  constructor(private operadoresService: OperadoresService,
            private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.obtenerOperadoresCop();
  }

  public obtenerOperadoresCop(): void{
    this.operadores$ = this.operadoresService.obtenerOperadores();
  }

  public irRuta(url: string): void{
    console.log(url);
    this.navCtrl.navigateForward(`${RouterContrains.OPERADORES}${url}`);
  }

  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.TABS);
  }
}
