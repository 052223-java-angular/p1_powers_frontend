import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopratedComponent } from './subcomponents/toprated/toprated.component';
import { FooterComponent } from './subcomponents/footer/footer.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { TrailinfoComponent } from './pages/trailinfo/trailinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TopratedComponent,
    FooterComponent,
    MyaccountComponent,
    TrailinfoComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
