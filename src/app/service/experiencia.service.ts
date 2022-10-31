import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencias';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  URL = environment.URL + 'experiencialaboral/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
  }

  public detalles(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.URL + `detalles/${id}`);
  }

  public guardar(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', experiencia);
  }

  public actualizar(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, experiencia);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
