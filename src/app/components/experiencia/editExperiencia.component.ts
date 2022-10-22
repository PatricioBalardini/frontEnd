import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencias';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editExperiencia',
  templateUrl: './editExperiencia.component.html',
  styleUrls: ['./editExperiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  experiencia: Experiencia = null;

  constructor(
    private ExperienciaService: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.ExperienciaService.detail(id).subscribe(
      data =>{
        this.experiencia = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.ExperienciaService.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
