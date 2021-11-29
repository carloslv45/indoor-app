import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperadoresService } from 'src/app/core/services/operadores/operadores.service';
import { PedidoService } from 'src/app/core/services/pedido/pedido.service';
import { DateTime } from 'luxon';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
})
export class SeguimientoPage implements OnInit {
  public operador: string;
  public fechaIncioProgramacion: string;
  public fechaFinProgramacion: string;
  public fechaInicioTrazo: string;
  public fechaFinTrazo: string;
  public fechaInicioEdicion: string;
  public fechaFinEdicion: string;
  public fechaInicioImpresion: string;
  public fechaFinImpresion: string;
  public fechaInicioEstanpacion: string;
  public fechaFinEstanpacion: string;
  public fechaInicioConfeccion: string;
  public fechaFinConfeccion: string;
  public fechaInicioEmpaque: string;
  public fechaFinEmpaque: string;
  public fechaInicioEnvio: string;
  public fechaFinEnvio: string;
  public fechaInicioAlistamiento: string;
  public fechaFinAlistamiento: string;
  public ops = '';
  public buscando = false;
  public idOperador: number;
  public idPedido: number;
  public fechainicio = DateTime.local().toLocaleString(DateTime.DATETIME_MED);
  public fechainiciobool = false;
  public fechfin = DateTime.local().toLocaleString(DateTime.DATETIME_MED);
  public fechafinbool = false;
  constructor(
    private activeRouter: ActivatedRoute,
    private pedidoService: PedidoService,
    private operadorService: OperadoresService,
    private mensaje: MensajesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.paramsActive();
  }

  public paramsActive(): void{
    this.activeRouter.params.subscribe((param) => {
      this.operador = param.id;
      console.log(param.id);
      this.operadorService.obtenerOperador(param.id).subscribe((data) => {
        data.map((resp) => {
          this.idOperador = resp.id;
        });
      });
    });
  }
  public buscarOp(op): void{
   this.pedidoService.obtenerPedidoAdmin$(op).subscribe((data) => {
     if(data){
       this.buscando = true;
        data.map((val) => {
          console.log(val);
          this.idPedido = val.id;
          this.ops = val.OP;
          this.fechaIncioProgramacion = val.fecha_inicio_programacion;
          this.fechaFinProgramacion = val.fecha_fin_programacion;
          this.fechaInicioTrazo = val.fecha_inicio_trazo;
          this.fechaFinTrazo = val.fecha_fin_trazo;
          this.fechaInicioEdicion = val.fecha_inicio_edicion;
          this.fechaFinEdicion = val.fecha_fin_edicion;
          this.fechaInicioImpresion = val.fecha_inicio_impresion;
          this.fechaFinImpresion = val.fecha_fin_impresion;
          this.fechaInicioEstanpacion = val.fecha_inicio_estampacion;
          this.fechaFinEstanpacion = val.fecha_fin_estampacion;
          this.fechaInicioConfeccion = val.fecha_inicio_confeccion;
          this.fechaFinConfeccion = val.fecha_fin_confeccion;
          this.fechaInicioEmpaque = val.fecha_inicio_empaque;
          this.fechaFinEmpaque = val.fecha_fin_empaque;
          this.fechaInicioEnvio= val.fecha_inicio_envio;
          this.fechaFinEnvio = val.fecha_fin_envio;
          this.fechaInicioAlistamiento= val.fecha_inicio_alistamiento;
          this.fechaFinAlistamiento = val.fecha_fin_alistamiento;
          console.log(this.fechaIncioProgramacion);
          console.log(this.fechaInicioTrazo);
          console.log(this.fechaFinProgramacion);
          console.log(this.fechaFinTrazo);
          this.validacionesFechasInicio();
          this.validacionesFechasFin();
        });
     }
   });
  }


  public fechaInicio(val): void{
    this.fechainiciobool = !this.fechainiciobool;
    if(this.fechainiciobool){
      const data = this.saberOpracionInicio(val);
      this.pedidoService.actualizarPedido(this.idPedido, data ).subscribe((resp => {
        if(resp){
          this.mensaje.presentAlertOk(`Se ha iniciado el proceso de ${this.operador} al OP ${this.ops}`);
          console.log('actualizado');
        }
      }));
    }


  }
  public fechaFin(val): void{
    this.fechafinbool = !this.fechafinbool;
    if(this.fechafinbool){
      this.fechfin = val;
       const data = this.saberOpracionFin(val);
      this.pedidoService.actualizarPedido(this.idPedido, data ).subscribe((resp => {
        if(resp){
          this.mensaje.presentAlertOk(`Se ha Finalizado el proceso de ${this.operador} al OP ${this.ops}`);
          console.log('actualizado');
        }
      }));
    }
  }


  public validacionesFechasInicio(): void{
    if(this.operador === 'programacion' && this.fechaIncioProgramacion !== null && this.fechaIncioProgramacion !== ''){
      this.fechainiciobool = true;
    }else {
    }
    if(this.operador === 'trazo' && this.fechaInicioTrazo !== null && this.fechaInicioTrazo !== '' ){
      this.fechainiciobool = true;
    }else {
    }
    if(this.operador === 'edicion' && this.fechaInicioEdicion !== null && this.fechaInicioEdicion !== '' ){
      this.fechainiciobool = true;
    }else {
    }
    if(this.operador === 'impresion' && this.fechaInicioImpresion !== null && this.fechaInicioImpresion !== '' ){
      this.fechainiciobool = true;
    }else {
    }
    if(this.operador === 'estampacion' && this.fechaInicioEstanpacion !== null && this.fechaInicioEstanpacion !== '' ){
      this.fechainiciobool = true;
    }else {
    }
    if(this.operador === 'confeccion' && this.fechaInicioConfeccion !== null && this.fechaInicioConfeccion !== '' ){
      this.fechainiciobool = true;
    }else {
    }
    if(this.operador === 'empaque' && this.fechaInicioEmpaque !== null && this.fechaInicioEmpaque !== '' ){
      this.fechainiciobool = true;
    }else {
    }
    if(this.operador === 'envio' && this.fechaInicioEnvio !== null && this.fechaInicioEnvio !== '' ){
      this.fechainiciobool = true;
    }else {
    }
    if(this.operador === 'alistamiento' && this.fechaInicioAlistamiento !== null && this.fechaInicioAlistamiento !== '' ){
      this.fechainiciobool = true;
    }else {
    }
  }

  public validacionesFechasFin(): void{
    if(this.operador === 'programacion' && this.fechaFinProgramacion !== null && this.fechaFinProgramacion !== ''){
      this.fechafinbool = true;
    }else {
    }
    if(this.operador === 'trazo' && this.fechaFinTrazo !== null && this.fechaFinTrazo !== ''){
      this.fechafinbool = true;
    }else {
    }
    if(this.operador === 'edicion' && this.fechaFinEdicion !== null && this.fechaFinEdicion !== '' ){
      this.fechafinbool = true;
    }else {
    }
    if(this.operador === 'impresion' && this.fechaFinImpresion !== null && this.fechaFinImpresion !== '' ){
      this.fechafinbool = true;
    }else {
    }
    if(this.operador === 'estampacion' && this.fechaFinEstanpacion !== null && this.fechaFinEstanpacion !== '' ){
      this.fechafinbool = true;
    }else {
    }
    if(this.operador === 'confeccion' && this.fechaFinConfeccion !== null && this.fechaFinConfeccion !== '' ){
      this.fechafinbool = true;
    }else {
    }
    if(this.operador === 'empaque' && this.fechaFinEmpaque !== null && this.fechaFinEmpaque !== '' ){
      this.fechafinbool = true;
    }else {
    }
    if(this.operador === 'envio' && this.fechaFinEnvio !== null && this.fechaFinEnvio !== '' ){
      this.fechafinbool = true;
    }else {
    }
    if(this.operador === 'alistamiento' && this.fechaFinAlistamiento !== null && this.fechaFinAlistamiento !== '' ){
      this.fechafinbool = true;
    }else {
    }
  }

  public saberOpracionInicio(val: string): any{
    if(this.operador === 'programacion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_programacion: val,
        estado: this.operador,
        proceso1: 50
      };
  }
    if(this.operador === 'trazo') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_trazo: val,
        estado: this.operador,
        proceso2: 50
      };
  }
    if(this.operador === 'corte') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_corte: val,
        estado: this.operador,
        proceso3: 50
      };
  }
    if(this.operador === 'edicion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_edicion: val,
        estado: this.operador,
        proceso4: 50
      };
  }
    if(this.operador === 'impresion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_impresion: val,
        estado: this.operador,
        proceso5: 50
      };
  }
    if(this.operador === 'estampacion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_estampacion: val,
        estado: this.operador,
        proceso6: 50
      };
  }
    if(this.operador === 'confeccion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_confeccion: val,
        estado: this.operador,
        proceso7: 50
      };
  }
    if(this.operador === 'empaque') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_empaque: val,
        estado: this.operador,
        proceso8: 50
      };
  }
    if(this.operador === 'envio') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_envio: val,
        estado: this.operador,
        proceso9: 50
      };
  }
    if(this.operador === 'alistamiento') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_inicio_alistamiento: val,
        estado: this.operador,
        proceso10: 50
      };
  }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////
  public saberOpracionFin(val: string): any{
    if(this.operador === 'programacion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_programacion: val,
        proceso1: 100
      };
  }
    if(this.operador === 'trazo') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_trazo: val,
        proceso2: 100
      };
  }
    if(this.operador === 'corte') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_corte: val,
        proceso3: 100
      };
  }
    if(this.operador === 'edicion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_edicion: val,
        proceso4: 100
      };
  }
    if(this.operador === 'impresion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_impresion: val,
        proceso5: 100
      };
  }
    if(this.operador === 'estampacion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_estampacion: val,
        proceso6: 100
      };
  }
    if(this.operador === 'confeccion') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_confeccion: val,
        proceso7: 100
      };
  }
    if(this.operador === 'empaque') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_empaque: val,
        proceso8: 100
      };
  }
    if(this.operador === 'envio') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_envio: val,
        proceso9: 100
      };
  }
    if(this.operador === 'alistamiento') {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        fecha_fin_alistamiento: val,
        proceso10: 100
      };
  }
  }

  public volver(): void{
    this.navCtrl.navigateForward(`/operadores/${this.operador}`);
  }
}
