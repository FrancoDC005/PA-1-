import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { ListaSolicitudesComponent } from './components/lista-solicitudes/lista-solicitudes.component';
import { SolicitudFormComponent } from './components/solicitud-form/solicitud-form.component';
import { SolicitudesRemotasComponent } from './components/solicitudes-remotas/solicitudes-remotas.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'solicitudes',
    component: ListaSolicitudesComponent
  },
  {
    path: 'solicitudes/nueva',
    component: SolicitudFormComponent
  },
  {
    path: 'externas',
    component: SolicitudesRemotasComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}