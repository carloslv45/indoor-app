import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavComponent } from '@ionic/core';
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
              private navCtr: NavController) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));

      this.usuario = this.usuario.split('@')[0];
      const separar = this.usuario.split('.');
      if(separar[0] === 'admin'){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }

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
  public cerrarSession(){
    this.navCtr.navigateForward(RouterContrains.LOGIN_ADMIN);
    localStorage.removeItem('user');
  }


}
