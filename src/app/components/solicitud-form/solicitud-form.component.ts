import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SolicitudService } from '../../services/solicitud.service';
import { Solicitud, TipoSolicitud } from '../../models/solicitud.model';

@Component({
  selector: 'app-solicitud-form',
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.css']
})
export class SolicitudFormComponent {

  solicitudForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private solicitudService: SolicitudService,
    private router: Router
  ) {
    this.solicitudForm = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],

      codigo: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$')
      ]],

      correo: ['', [
        Validators.required,
        Validators.email
      ]],

      tipo: ['', Validators.required],

      descripcion: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  enviarSolicitud(): void {

    if (this.solicitudForm.invalid) {
      this.solicitudForm.markAllAsTouched();
      return;
    }

    const datos = this.solicitudForm.value;

    const nuevaSolicitud: Solicitud = {
      id: Date.now(),

      estudiante: {
        id: Date.now(),
        nombre: datos.nombre,
        codigo: datos.codigo,
        correo: datos.correo
      },

      tipo: datos.tipo as TipoSolicitud,

      descripcion: datos.descripcion,

      estado: 'pendiente',

      fecha: new Date()
    };

    this.solicitudService.agregarSolicitud(nuevaSolicitud);

    alert('Solicitud registrada correctamente.');

    this.solicitudForm.reset();

    this.router.navigate(['/solicitudes']);
  }
}