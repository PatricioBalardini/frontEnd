import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = environment.URL + 'personas/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detalles(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `detalles/${id}`);
  }

  public guardar(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', persona);
  }

  public actualizar(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, persona);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
