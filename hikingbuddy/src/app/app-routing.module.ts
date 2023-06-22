import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from './modules/User/components/login/login.component';
import { RegisterComponent } from './modules/User/components/register/register.component';



const routes: Routes = [
{path:"home", component: HomeComponent},
{path:"navbar", component: NavbarComponent}, 
{path:"login", component: LoginComponent},
{path:"register", component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
