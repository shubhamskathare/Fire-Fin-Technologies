import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'navbar', component:NavbarComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
