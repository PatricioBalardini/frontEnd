import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css'],
})
export class EditarSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(
    private skillService: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detalles(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.actualizar(id, this.skill).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar la skill');
        this.router.navigate(['']);
      }
    );
  }
}
