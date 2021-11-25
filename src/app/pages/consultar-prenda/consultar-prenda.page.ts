import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CreateUserService } from 'src/app/core/services/create-user.service';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { PrendasService } from 'src/app/core/services/prendas.service';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { Prendas } from 'src/app/interfaces/crear-prendas/crear-prendas.interface';

@Component({
  selector: 'app-consultar-prenda',
  templateUrl: './consultar-prenda.page.html',
  styleUrls: ['./consultar-prenda.page.scss'],
})
export class ConsultarPrendaPage implements OnInit {
  public contador = 0;
  public contenedorArr: number[] = [];
  public formulario: FormGroup;
  constructor(
    private navCtrl: NavController,
    private  fb: FormBuilder,
    private prendaService: PrendasService,
    private mensajes: MensajesService
  ) { }

  ngOnInit() {
    this.dataBuilder();
  }

  public dataBuilder(): void{
    this.formulario = this.fb.group({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      nombre_prenda: ['', Validators.required],
      lessons: this.fb.array([])
    });
  }
  get lessons(): FormArray{
    // eslint-disable-next-line @typescript-eslint/dot-notation
    return this.formulario.controls['lessons'] as FormArray;
  }

   public newReferencia(): FormGroup{
    return this.fb.group({
      referencia: [''],
    });
  }

  public addReferencia(): void{

    this.lessons.push(this.newReferencia());
  }
  public crearPrenda(data: Prendas): void{
    this.prendaService.crearPrendas$(data).subscribe((resp) => {
        if(resp){
          this.mensajes.presentAlertOk(`Prenda ${resp.nombre_prenda} creada correctamente`);
          this.formulario.reset();
        }else{
          this.mensajes.presentAlertErr(`Error al crear la Prenda ${resp.nombre_prenda}`);
        }
      }, (err) => {
        this.mensajes.presentAlertErr(`Error de servidor ${err}`);
    });
  }
  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.INICIO);
  }
}
