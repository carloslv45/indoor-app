import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              private router: Router) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((data) => {
      console.log(data);
      this.usuario = data.user.split('@')[0];
      const separar = this.usuario.split('.');
      if(separar[0] === 'admin'){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
    });
  }


  public navigation(ruta: string){
    this.router.navigateByUrl(ruta);
  }


}
