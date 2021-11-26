import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterContrains } from 'src/app/enum/router-contrains';
import { DateTime } from 'luxon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { uuid } from 'uuidv4';
import { PrendasService } from 'src/app/core/services/prendas.service';
import { Observable } from 'rxjs';
import { Lesson, ResponsePrendasGet } from 'src/app/interfaces/crear-prendas/response-prendas-get';
import { Lessons } from 'src/app/interfaces/crear-prendas/lessons';
import { PedidoService } from 'src/app/core/services/pedido/pedido.service';
import { UserAuthService } from 'src/app/core/services/me/user-auth.service';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
  public formulario: FormGroup;
  public fechaCreacion = DateTime.now();
  public isImagen = false;
  public referencia: Lesson[];
  public op = '';
  public imagen: string[] = [];
  public existeUser: boolean;
  public prendas$: Observable<ResponsePrendasGet[]>;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private prendasService: PrendasService,
    private pedidoService: PedidoService,
    private userAuth: UserAuthService,
    private mensajes: MensajesService
  ) { }

  ngOnInit() {
    this.dataBuilder();
    this.obtenerPrendas();
    this.opGenerar();
  }

  public dataBuilder(): void{
    this.formulario = this.fb.group({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      OP: [''],
      fechaCreaciones: [this.fechaCreacion.toLocaleString()],
      cedula: ['', Validators.required],
      prenda: ['', Validators.required],
      referencia: ['', Validators.required]
    });
  }

  public volver(): void{
    this.navCtrl.navigateForward(RouterContrains.INICIO);
  }
  public loadImageFromDevice(event): void{
    this.imagen = [];
    const img = event.target.files;
    if(img){
      this.pedidoService.imagenPedido(img);
      for(const image of img){
        // eslint-disable-next-line prefer-const
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagen.push(e.target.result);
          if(this.imagen.length > 0){
            this.isImagen = true;
          }
        };
        reader.readAsDataURL(image);
      };
    }
  }

  public crearPedido(data): void{
    // eslint-disable-next-line radix
    const userId = parseInt(localStorage.getItem('user'));
    const {fechaCreaciones, ...object} = data;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    object.user = userId;
    const jwt = localStorage.getItem('jwt');
    this.userAuth.meAll(jwt, object.cedula).subscribe((resp) => {
       if(resp.length > 0){
        this.pedidoService.dataPedido(object);
        this.formulario.reset();
         }else{
          this.mensajes.presentAlertErr(`El usario con cedula ${object.cedula} no existe`);
         }
   });
  }

  public obtenerPrendas(): void{
   this.prendas$ = this.prendasService.obtenerPrendas$();
  }
  public saberPrenda(event): void{
    this.referencia = [];
    const idPrenda = event.detail.value;
    this.prendas$.subscribe((resp) => {
      resp.filter((val) => {
       if(val.id === idPrenda){
      this.referencia = val.lessons;
       }
     });
    });
  }

  public opGenerar(): void{
    const op = localStorage.getItem('jwt').split('.')[1].slice(4 , 10);
    const random = Math.floor(Math.random() * (100000 - 1)) + 1;
    const union = `${op}${random.toString()}`;
    console.log(union);
    this.op = union;
    this.formulario.get('OP').setValue(this.op);
  }

}
