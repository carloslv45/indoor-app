import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LocalStorageServiceService } from 'src/app/core/services/localService/local-storage-service.service';
import { UserAuthService } from 'src/app/core/services/me/user-auth.service';
import { PedidoService } from 'src/app/core/services/pedido/pedido.service';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { ResponsePedidoGet } from 'src/app/interfaces/pedido/response-pedido-get';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modificar-pedido',
  templateUrl: './modificar-pedido.page.html',
  styleUrls: ['./modificar-pedido.page.scss'],
})
export class ModificarPedidoPage implements OnInit {

  public cedula: string;
  public server = environment.pathImg;
  public op: string;
  public pedido$: Observable<ResponsePedidoGet[]>;
  public isModificar = false;
  constructor(
    private navCtrl: NavController,
    private userService: UserAuthService,
    private localService: LocalStorageServiceService,
    private pedidoService: PedidoService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.localServiceData();
  }

  public onClick(op: any): void{
    this.op = op;
   this.pedido$ = this.pedidoService.obtenerPedido$(op, this.cedula);
   if(this.pedido$){
     this.isModificar = true;
   }
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

  public async modificarPedido(){
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'moda-class',
      componentProps: {
        op: this.op,
        pedido: this.pedido$
      }
    });
    return await modal.present();
  }
}

