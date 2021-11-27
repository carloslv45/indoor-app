import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { PedidoService } from 'src/app/core/services/pedido/pedido.service';
import { TallasService } from 'src/app/core/services/tallas/tallas.service';
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
  public formulario: FormGroup;
  @Input() set op(val: string){
     this.opModal = val;
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() pedido: Observable<ResponsePedidoGet[]>;
  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private pedidoService: PedidoService,
    private mensaje: MensajesService,
    private tallasService: TallasService
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
      }
    });
  }
  public cerrar(): void{
    this.modalCtrl.dismiss();
  }

  public obtenerTallas(): void{
   this.tallas$ =  this.tallasService.obtenerTallas();
  }

}
