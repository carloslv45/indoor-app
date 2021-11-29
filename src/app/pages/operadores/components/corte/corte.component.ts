import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IngresoService } from 'src/app/core/services/auth/ingreso.service';
import { LocalStorageServiceService } from 'src/app/core/services/localService/local-storage-service.service';

@Component({
  selector: 'app-corte',
  templateUrl: './corte.component.html',
  styleUrls: ['./corte.component.scss'],
})
export class CorteComponent implements OnInit {

  public formulario: FormGroup;
  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private ingresoService: IngresoService,
    private localService: LocalStorageServiceService
  ) {
   }

  ngOnInit() {
    this.dataBuilders();
  }

  public dataBuilders(): void{
    this.formulario = this.fb.group({
      identifier: ['corteindoor@gmail.com', Validators.required],
      password: ['indoorcorte2021', Validators.required]
    });
  }

  public volver(): void{
    this.navCtrl.navigateForward('/operadores');
  }
  public ingreso(data): void{
    this.ingresoService.ingreso(data).subscribe((resp) => {
      if(resp){
        this.localService.setjwtSetLocalStorage(resp.jwt);
        this.localService.setUserSetLocalStorage(JSON.stringify(resp.user.id));
        this.navCtrl.navigateForward(['seguimiento', resp.user.operador]);
      }
    });
  }

}
