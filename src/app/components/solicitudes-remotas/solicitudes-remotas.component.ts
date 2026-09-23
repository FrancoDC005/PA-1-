import { Component, OnInit } from '@angular/core';
import { ApiService, UsuarioApi } from '../../services/api.service';

@Component({
  selector: 'app-solicitudes-remotas',
  templateUrl: './solicitudes-remotas.component.html',
  styleUrls: ['./solicitudes-remotas.component.css']
})
export class SolicitudesRemotasComponent implements OnInit {

  usuarios: UsuarioApi[] = [];
  cargando = true;
  error = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerUsuarios().subscribe({
      next: (datos) => {
        this.usuarios = datos;
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }
}