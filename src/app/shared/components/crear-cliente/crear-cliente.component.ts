import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterContrains } from 'src/app/enum/router-contrains';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss'],
})
export class CrearClienteComponent implements OnInit {
  @Output() navigation = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}


}
