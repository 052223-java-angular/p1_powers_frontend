import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './modules/User/components/login/login.component';
import { RegisterComponent } from './modules/User/components/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyaccountComponent } from './modules/User/components/myaccount/myaccount.component';
import { TrailinfoComponent } from './pages/trailinfo/trailinfo.component';
import { RatingComponent } from './modules/Ratings/components/rating/rating.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyaccountComponent,
    TrailinfoComponent,
    RatingComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [HttpClient, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
