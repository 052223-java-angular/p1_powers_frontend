import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from './modules/User/components/login/login.component';
import { RegisterComponent } from './modules/User/components/register/register.component';
import { TrailInfoComponent } from './modules/Trail/Components/TrailInfo/trail-info/trail-info.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
{path:"home", component: HomeComponent},
{path:"navbar", component: NavbarComponent}, 
{path:"login", component: LoginComponent},
{path:"register", component: RegisterComponent},
{path:"info", component: TrailInfoComponent},
{path:"notfound", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
