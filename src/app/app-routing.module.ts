import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/editEducacion.component';
import { NewEducacionComponent } from './components/educacion/newEducacion.component';
import { EditExperienciaComponent } from './components/experiencia/editExperiencia.component';
import { NewExperienciaComponent } from './components/experiencia/newExperiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/editSkill.component';
import { NewSkillComponent } from './components/hys/newSkill.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexperiencia', component: NewExperienciaComponent},
  { path: 'editexperiencia/:id', component: EditExperienciaComponent},
  { path: 'nuevaeducacion', component: NewEducacionComponent},
  { path: 'editeducacion/:id', component: EditEducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
