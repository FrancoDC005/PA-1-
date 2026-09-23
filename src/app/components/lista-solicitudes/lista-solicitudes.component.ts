import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.solicitudes = this.solicitudService.obtenerSolicitudes();
  }
}