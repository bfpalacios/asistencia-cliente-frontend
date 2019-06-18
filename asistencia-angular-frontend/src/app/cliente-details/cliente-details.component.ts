import { Cliente } from './../cliente';
import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { EmployeeListComponent } from '../cliente-list/cliente-list.component';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() cliente: Cliente;

  constructor(private clienteService: ClienteService, private listComponent: EmployeeListComponent) { }

  ngOnInit() {
  }

}
