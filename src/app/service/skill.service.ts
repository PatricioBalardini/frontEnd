import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  URL = environment.URL + 'skill/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.URL + 'lista');
  }

  public detalles(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.URL + `detalles/${id}`);
  }

  public guardar(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', skill);
  }

  public actualizar(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, skill);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
