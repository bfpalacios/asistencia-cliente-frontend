import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  cliente: Cliente = new Cliente();
  submitted = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.cliente = new Cliente();
  }

  save() {
    this.clienteService.createCliente(this.cliente)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cliente = new Cliente();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
