import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Label, MultiDataSet } from 'ng2-charts';
import { Observable } from 'rxjs';
import { LocalStorageServiceService } from 'src/app/core/services/localService/local-storage-service.service';
import { UserAuthService } from 'src/app/core/services/me/user-auth.service';
import { PedidoService } from 'src/app/core/services/pedido/pedido.service';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { ResponsePedidoGet } from 'src/app/interfaces/pedido/response-pedido-get';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proceso-pedido',
  templateUrl: './proceso-pedido.page.html',
  styleUrls: ['./proceso-pedido.page.scss'],
})
export class ProcesoPedidoPage implements OnInit {
  public doughnutChartLabels: Label[] = [];
  public doughnutChartLabels1: Label[] = [];
  public doughnutChartLabels2: Label[] = [];
  public doughnutChartLabels3: Label[] = [];
  public doughnutChartLabels4: Label[] = [];
  public doughnutChartLabels5: Label[] = [];
  public doughnutChartLabels6: Label[] = [];
  public doughnutChartLabels7: Label[] = [];
  public doughnutChartLabels8: Label[] = [];
  public doughnutChartLabels9: Label[] = [];
  public doughnutChartData = [];
  public doughnutChartData1 = [];
  public doughnutChartData2 = [];
  public doughnutChartData3 = [];
  public doughnutChartData4 = [];
  public doughnutChartData5 = [];
  public doughnutChartData6 = [];
  public doughnutChartData7 = [];
  public doughnutChartData8 = [];
  public doughnutChartData9 = [];
  public proceso1 = false;
  public cedula: string;
  public server = environment.pathImg;
  public isGraficas = false;
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
   this.pedidoService.obtenerPedido$(op, this.cedula).subscribe((data) => {
     console.log(data);
    this.graficasProceso(data[0]);
    this.isGraficas = true;
   });
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


  public graficasProceso(data: ResponsePedidoGet): void{
    if(data.proceso1){
      this.proceso1 = true;
      this.doughnutChartLabels = ['Programacion'];
      if(data.proceso1 === 100){
        this.doughnutChartData = [data.proceso1];
      }else{
        this.doughnutChartData = [data.proceso1,0];
      }
    }else{
      console.log('data.proceso1 vacio'); 
      this.proceso1 = false;
    }
    if(data.proceso2){
      this.doughnutChartLabels1 = ['Trazo'];
      if(data.proceso2 === 100){
        this.doughnutChartData1 = [data.proceso2];
      }else{
        this.doughnutChartData1 = [data.proceso2,0];
      }
    }
    if(data.proceso3){
      this.doughnutChartLabels2 = ['Corte'];
      if(data.proceso3 === 100){
        this.doughnutChartData2 = [data.proceso3];
      }else{
        this.doughnutChartData2 = [data.proceso3,0];
      }
    }
    if(data.proceso4){
      this.doughnutChartLabels3 = ['Edicion'];
      if(data.proceso4 === 100){
        this.doughnutChartData3 = [data.proceso4];
      }else{
        this.doughnutChartData3 = [data.proceso4,0];
      }
    }
    if(data.proceso5){
      this.doughnutChartLabels4 = ['Impresion'];
      if(data.proceso5 === 100){
        this.doughnutChartData4 = [data.proceso5];
      }else{
        this.doughnutChartData4 = [data.proceso5,0];
      }
    }
    if(data.proceso6){
      this.doughnutChartLabels5 = ['Estampacion'];
      if(data.proceso6 === 100){
        this.doughnutChartData5 = [data.proceso6];
      }else{
        this.doughnutChartData5 = [data.proceso6,0];
      }
    }
    if(data.proceso7){
      this.doughnutChartLabels6 = ['Confeccion'];
      if(data.proceso7 === 100){
        this.doughnutChartData6 = [data.proceso7];
      }else{
        this.doughnutChartData6 = [data.proceso7,0];
      }
    }
    if(data.proceso8){
      this.doughnutChartLabels7 = ['Empaque'];
      if(data.proceso8 === 100){
        this.doughnutChartData7 = [data.proceso8];
      }else{
        this.doughnutChartData7 = [data.proceso8,0];
      }
    }
    if(data.proceso9){
      this.doughnutChartLabels8 = ['Envio'];
      if(data.proceso9 === 100){
        this.doughnutChartData8 = [data.proceso9];
      }else{
        this.doughnutChartData8 = [data.proceso9,0];
      }
    }
    if(data.proceso10){
      this.doughnutChartLabels9 = ['Alistamiento'];
      if(data.proceso10 === 100){
        this.doughnutChartData9 = [data.proceso10];
      }else{
        this.doughnutChartData9 = [data.proceso10,0];
      }
    }

  }

}
