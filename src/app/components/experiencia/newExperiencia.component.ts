import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencias';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-newExperiencia',
  templateUrl: './newExperiencia.component.html',
  styleUrls: ['./newExperiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombre: string;
  descripcion: string;

  constructor(private ExperienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.nombre, this.descripcion);
    this.ExperienciaService.save(experiencia).subscribe(
      data => {
        alert("Experiencia añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
