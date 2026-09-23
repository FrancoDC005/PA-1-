import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UsuarioApi {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<UsuarioApi[]> {
    return this.http.get<UsuarioApi[]>(this.apiUrl);
  }
}