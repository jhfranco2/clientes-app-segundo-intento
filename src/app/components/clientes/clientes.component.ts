import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes.models';
import { ClientesService } from 'src/app/services/clientes.service';
import { CLIENTES } from './cliente.json';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[];

  constructor(
    private clienteService:ClientesService
  ){

  }
  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      data =>{
        this.clientes = data;
      }
    );
  }

}
