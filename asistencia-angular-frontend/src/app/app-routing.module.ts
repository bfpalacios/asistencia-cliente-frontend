import { EmployeeDetailsComponent } from './cliente-details/cliente-details.component';
import { CreateEmployeeComponent } from './create-cliente/create-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './cliente-list/cliente-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'cliente', component: EmployeeListComponent },
  { path: 'nuevo', component: CreateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
