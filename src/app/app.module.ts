import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { ListaSolicitudesComponent } from './components/lista-solicitudes/lista-solicitudes.component';
import { SolicitudFormComponent } from './components/solicitud-form/solicitud-form.component';
import { SolicitudesRemotasComponent } from './components/solicitudes-remotas/solicitudes-remotas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaSolicitudesComponent,
    SolicitudFormComponent,
    SolicitudesRemotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}