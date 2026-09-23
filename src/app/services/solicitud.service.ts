import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private solicitudes: Solicitud[] = [
    {
      id: 1,
      estudiante: {
        id: 1,
        nombre: 'Juan Pérez',
        codigo: '20260001',
        correo: 'juan.perez@gmail.com'
      },
      tipo: 'constancia',
      descripcion: 'Solicitud de constancia de estudios.',
      estado: 'pendiente',
      fecha: new Date()
    }
  ];

  obtenerSolicitudes(): Solicitud[] {
    return this.solicitudes;
  }

  agregarSolicitud(solicitud: Solicitud): void {
    this.solicitudes.push(solicitud);
  }
}