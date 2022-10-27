import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acercaDe',
  templateUrl: './acercaDe.component.html',
  styleUrls: ['./acercaDe.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
