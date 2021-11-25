/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePedido } from 'src/app/interfaces/pedido/response-pedido';
import { environment } from 'src/environments/environment';
import { MensajesService } from '../mensajes/mensajes.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  public imagen: any;
  public server = environment.path;
  public httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    })
  };
  constructor(private http: HttpClient,
            private mensaje: MensajesService
      ) { }

  public crearPedido$(data: FormData): Observable<ResponsePedido>{
    return this.http.post<ResponsePedido>(`${this.server}pedidos`, data, this.httpOptions);
  }

  public dataPedido(data): void{
    this.unionCrearPedido(this.imagen, data);
  }
  public imagenPedido(imagen): void{
    this.imagen = imagen[0];
  }
  public unionCrearPedido(img?, data?): void{
    console.log(img, JSON.stringify(data));
    const formData = new FormData();
    formData.append('files.imagen', img);
    formData.append('data', JSON.stringify(data));
    this.crearPedido$(formData).subscribe((resp) => {
      if(resp){
        console.log(resp);
        // eslint-disable-next-line max-len
        this.mensaje.presentAlertOk(`El pedido fue creado correctamente con #OP ${data.OP} asociado al cliente con identificacion ${data.cedula}`);
      }else{
        this.mensaje.presentAlertErr(`El pedido NO fue creado correctamente`);
      }
    }, (err) => {
      this.mensaje.presentAlertErr(`Error de servidor ${err}`);
    });
  }
}
