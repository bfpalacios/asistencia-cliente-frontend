import { EmployeeDetailsComponent } from './../cliente-details/cliente-details.component';
import { Observable } from "rxjs";
import { ClienteService } from "./../cliente.service";
import { Cliente } from "./../cliente";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-cliente-list",
  templateUrl: "./cliente-list.component.html",
  styleUrls: ["./cliente-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  clientes: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clientes = this.clienteService.getAllCliente();
  }

  deleteEmployee(id: number) {
    this.clienteService.deleteCliente(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
