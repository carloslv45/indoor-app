import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public usuario: string;
  public isAdmin: boolean;
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((data) => {
      console.log(data);
      this.usuario = data.user;
      const separar = this.usuario.split('.');
      console.log(separar);
      if(separar[0] === 'admin'){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
    });
  }

}
