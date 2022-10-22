import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencias';
import { SExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-newExperiencia',
  templateUrl: './newExperiencia.component.html',
  styleUrls: ['./newExperiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombre, this.descripcion);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
