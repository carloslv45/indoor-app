import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LocalStorageServiceService } from 'src/app/core/services/localService/local-storage-service.service';
import { UserAuthService } from 'src/app/core/services/me/user-auth.service';
import { PedidoService } from 'src/app/core/services/pedido/pedido.service';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { ResponsePedidoGet } from 'src/app/interfaces/pedido/response-pedido-get';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.page.html',
  styleUrls: ['./consultar-pedido.page.scss'],
})
export class ConsultarPedidoPage implements OnInit {
  public cedula: string;
  public server = environment.pathImg;
  public pedido$: Observable<ResponsePedidoGet[]>;
  constructor(
    private navCtrl: NavController,
    private userService: UserAuthService,
    private localService: LocalStorageServiceService,
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.localServiceData();
  }

  public onClick(op: any): void{
    console.log(op);
   this.pedido$ = this.pedidoService.obtenerPedido$(op, this.cedula);
  }
  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.INICIO);
  }

  public localServiceData(): void{
    const jwt = this.localService.getjwtSetLocalStorage();
    const userId = this.localService.getUserSetLocalStorage();
    this.getUserAuth(jwt, userId);
  }

  public getUserAuth(jwt: string ,  userId: string): void{
    // eslint-disable-next-line radix
    const user = parseInt(userId);
    this.userService.me(jwt, user).subscribe((resp) => {
      if(resp){
        this.cedula = resp.cedula;
      }
    });
  }

  public allPedidos(): void{
    this.pedido$ =  this.pedidoService.obtenerPedidoAll$(this.cedula);
  }

}
