import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavComponent } from '@ionic/core';
import { LocalStorageServiceService } from 'src/app/core/services/localService/local-storage-service.service';
import { UserAuthService } from 'src/app/core/services/me/user-auth.service';
import { RouterContrains } from 'src/app/enum/router-contrains';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public usuario: string;
  public isAdmin: boolean;
  constructor(private activeRouter: ActivatedRoute,
              private router: Router,
              private localService: LocalStorageServiceService,
              private userService: UserAuthService,
              private navCtr: NavController) { }

  ngOnInit() {
    this.localServiceData();


  }


  public navigation(){
    this.navCtr.navigateForward(RouterContrains.CREAR_CLIENTE);
  }
  public navigation2(){
    this.navCtr.navigateForward(RouterContrains.CREAR_PEDIDO);
  }
  public navigation3(){
    this.navCtr.navigateForward(RouterContrains.CONSULTAR_PEDIDO);
  }
  public navigation4(){
    this.navCtr.navigateForward(RouterContrains.CREAR_PRENDA);
  }
  public navigation5(){
    this.navCtr.navigateForward(RouterContrains.CREAR_REFERENCIA);
  }
  public navigation6(){
    this.navCtr.navigateForward(RouterContrains.MODIFICAR_PEDIDO);
  }
  public navigation7(){
    this.navCtr.navigateForward(RouterContrains.CONSULTAR_PEDIDO_ADMIN);
  }
  public cerrarSession(){
    if(this.isAdmin){
      this.navCtr.navigateForward(RouterContrains.LOGIN_ADMIN);
      this.localService.removeUserSetLocalStorage();
      this.localService.removejwtSetLocalStorage();

    }else{
      this.navCtr.navigateForward(RouterContrains.LOGIN_USER);
      this.localService.removeUserSetLocalStorage();
      this.localService.removejwtSetLocalStorage();
    }
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
        this.usuario = `${resp.username} ${resp.apellido}`;
        this.isAdmin = resp.admin;
        console.log(this.isAdmin);
      }
    });
  }


}
