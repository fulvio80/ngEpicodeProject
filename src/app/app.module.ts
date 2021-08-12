import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableClientiComponent } from './table-clienti/table-clienti.component';
import { UpdateClienteFormComponent } from './update-cliente-form/update-cliente-form.component';
import { NewClienteFormComponent } from './new-cliente-form/new-cliente-form.component';
import { FormsModule } from '@angular/forms';
import { TableFattureComponent } from './table-fatture/table-fatture.component';
import { NewFatturaFormComponent } from './new-fattura-form/new-fattura-form.component';
import { UpdateFatturaFormComponent } from './update-fattura-form/update-fattura-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableClientiComponent,
    UpdateClienteFormComponent,
    NewClienteFormComponent,

    TableFattureComponent,
    NewFatturaFormComponent,
    UpdateFatturaFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
