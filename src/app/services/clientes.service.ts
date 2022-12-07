import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CLIENTES } from '../components/clientes/cliente.json';
import { Cliente } from '../models/clientes.models';
import { of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
  ) { }

  getAll(): Observable<Cliente[]> {
    return of(CLIENTES);
  }
}
