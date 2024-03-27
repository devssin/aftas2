import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { FormsModule } from '@angular/forms';
import { AddLevelFormComponent } from './components/levels/add-level-form/add-level-form.component';
import { UpdateLevelFormComponent } from './components/levels/update-level-form/update-level-form.component';
import { LevelTableComponent } from './components/levels/level-table/level-table.component';
import { FishTableComponent } from './components/fishs/fish-table/fish-table.component';
import { AddFishFormComponent } from './components/fishs/add-fish-form/add-fish-form.component';
import { MemberTableComponent } from './components/members/member-table/member-table.component';
import { AddMemberFormComponent } from './components/members/add-member-form/add-member-form.component';
import { AllCompetitionsComponent } from './components/competitions/all-competitions/all-competitions.component';
import { AddCompetitionFormComponent } from './components/competitions/add-competition-form/add-competition-form.component';
import { UpdateCompetitionFormComponent } from './components/competitions/update-competition-form/update-competition-form.component';
import { CompetitionInfoComponent } from './components/competitions/competition-info/competition-info.component';
import { MembersInCompetitionComponent } from './components/competitions/members-in-competition/members-in-competition.component';
import { HuntingsInCompetitionComponent } from './components/competitions/huntings-in-competition/huntings-in-competition.component';
import { PodiumComponent } from './components/competitions/podium/podium.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { authReducer } from './store/user/user.reducer';
import { AuthEffects } from './store/user/user.effects';
import { AuthInterceptor } from './guards/AuthInterceptor';

export function tokenGetter() {
  const token = getCookie('token');
  return  token != undefined ? token : null
}

export function getCookie(name: string): string | undefined {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop(): undefined;
}

const jwtModuleOptions: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
  },
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    AddLevelFormComponent,
    UpdateLevelFormComponent,
    LevelTableComponent,
    FishTableComponent,
    AddFishFormComponent,
    MemberTableComponent,
    AddMemberFormComponent,
    AllCompetitionsComponent,
    AddCompetitionFormComponent,
    UpdateCompetitionFormComponent,
    CompetitionInfoComponent,
    MembersInCompetitionComponent,
    HuntingsInCompetitionComponent,
    PodiumComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ userFeature: authReducer}),
    EffectsModule.forRoot(AuthEffects),
    JwtModule.forRoot(jwtModuleOptions)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true, // Set multi to true for multi-provider array
  },DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
