import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditarSkillComponent } from './components/hys/editar-skill.component';
import { NuevaSkillComponent } from './components/hys/nueva-skill.component';
import { IngresarComponent } from './components/ingreso/ingresar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'nuevaexperiencia', component: NuevaExperienciaComponent},
  { path: 'editarexperiencia/:id', component: EditarExperienciaComponent},
  { path: 'nuevaeducacion', component: NuevaEducacionComponent},
  { path: 'editareducacion/:id', component: EditarEducacionComponent},
  { path: 'nuevaskill', component: NuevaSkillComponent},
  { path: 'editarskill/:id', component: EditarSkillComponent},
  { path: 'editaracercade/:id', component: EditarAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
