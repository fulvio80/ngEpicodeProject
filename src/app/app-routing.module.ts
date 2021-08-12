import { RegisterComponent } from './register/register.component';
import { NewFatturaFormComponent } from './new-fattura-form/new-fattura-form.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard.service';
import { TableFattureComponent } from './table-fatture/table-fatture.component';
import { NewClienteFormComponent } from './new-cliente-form/new-cliente-form.component';
import { UpdateClienteFormComponent } from './update-cliente-form/update-cliente-form.component';
import { TableClientiComponent } from './table-clienti/table-clienti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFatturaFormComponent } from './update-fattura-form/update-fattura-form.component';

const routes: Routes = [
  { path: 'clienti', component: TableClientiComponent },
  { path: 'clienti/:id/edit', component: UpdateClienteFormComponent },
  { path: 'clienti/new', component: NewClienteFormComponent },
  { path: 'fatture', component: TableFattureComponent },
  { path: 'fatture/:id/edit', component: UpdateFatturaFormComponent },
  { path: 'fatture/new', component: NewFatturaFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
