import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelTableComponent } from './components/levels/level-table/level-table.component';
import { FishTableComponent } from './components/fishs/fish-table/fish-table.component';
import { MemberTableComponent } from './components/members/member-table/member-table.component';
import { AllCompetitionsComponent } from './components/competitions/all-competitions/all-competitions.component';
import { CompetitionInfoComponent } from './components/competitions/competition-info/competition-info.component';
import { PodiumComponent } from './components/competitions/podium/podium.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './guards/Auth.guard';

const routes: Routes = [
  {path:'levels',component:LevelTableComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['Manager','Adherent'] }},
  {path:'fishs',component:FishTableComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['Manager','Adherent'] }},
  {path:'members',component:MemberTableComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['Manager','Adherent'] }},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:AllCompetitionsComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['Manager','Jury','Adherent'] }},
  {path:'competitions/:code',component:CompetitionInfoComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['Manager','Jury','Adherent'] }},
  {path:'competitions/podium/:code',component:PodiumComponent,canActivate: [AuthGuard] , data: { allowedRoles: ['Manager','Jury','Adherent'] }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
