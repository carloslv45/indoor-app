import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OperadoresService } from 'src/app/core/services/operadores/operadores.service';
import { ResponseOperadores } from 'src/app/interfaces/operadores/result-operadores';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.page.html',
  styleUrls: ['./operadores.page.scss'],
})
export class OperadoresPage implements OnInit {
  public operadores$: Observable<ResponseOperadores[]>;
  constructor(private operadoresService: OperadoresService) { }

  ngOnInit() {
    this.obtenerOperadoresCop();
  }

  public obtenerOperadoresCop(): void{
    this.operadores$ = this.operadoresService.obtenerOperadores();
  }

}
