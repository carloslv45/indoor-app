import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { PedidoService } from 'src/app/core/services/pedido/pedido.service';
import { ReferenciaService } from 'src/app/core/services/referencia/referencia.service';
import { TallasService } from 'src/app/core/services/tallas/tallas.service';
import { Especificacion } from 'src/app/interfaces/espesificaciones/especificacionArr';
import { EspesificacionData } from 'src/app/interfaces/espesificaciones/especificaciones-data';
import { ResponsePedidoGet } from 'src/app/interfaces/pedido/response-pedido-get';
import { ResponseTallas } from 'src/app/interfaces/tallas/response-tallas';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public opModal: string;
  public tallas$: Observable<ResponseTallas[]>;
  public id: number;
  public especificacion: Especificacion[] = [];
  public idPedido: number;
  public formulario: FormGroup;
  @Input() set op(val: string){
     this.opModal = val;
     this.obtenerOp(this.opModal);
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() pedido: Observable<ResponsePedidoGet[]>;
  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private pedidoService: PedidoService,
    private mensaje: MensajesService,
    private tallasService: TallasService,
    private referenciaService: ReferenciaService
  ) { }

  ngOnInit() {
    this.formBuilder();
    this.obtenerTallas();
    this.pedido.subscribe((data) => {
      this.id = data[0].id;
    });
  }

  public formBuilder(): void{
    this.formulario = this.fb.group({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      detalles_pedido: [''],
      numero: [''],
      talla: [''],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      nombre_prenda: [''],
      observaciones: ['']
    });
  }

  public modificar(data): void{
    console.log(data);
    this.pedidoService.actualizarPedido(this.id, data).subscribe(resp => {
      if(resp){
        this.mensaje.presentAlertOk('Información cargada correctamente');
        this.modalCtrl.dismiss();
        this.postReferencia();
      }
    });
  }
  public cerrar(): void{
    this.modalCtrl.dismiss();
  }

  public obtenerTallas(): void{
   this.tallas$ =  this.tallasService.obtenerTallas();
  }



  public obtenerOp(op: string): void{
    this.pedidoService.obtenerPedidoAdmin$(op).subscribe((data) => {
      data.map((resp) => {
       this.idPedido = resp.id;
      });
    });
  }

  public postReferencia(): void{
    this.especificacion.push(this.formulario.value);
    const data: EspesificacionData = {
      pedido: this.idPedido,
      especificacion:  this.especificacion
    };
    console.log(data);
    this.referenciaService.postEspecificaciones(data).subscribe((ok) => {
      console.log(ok);
    });
  }

}
