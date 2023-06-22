import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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
import { TopRatedComponent } from './modules/Trail/Components/top-rated/top-rated.component';
import { ToastrModule } from 'ngx-toastr';
import { TrailInfoComponent } from './modules/Trail/Components/TrailInfo/trail-info/trail-info.component';


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
    TopRatedComponent,
    TrailInfoComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [HttpClient, ToastrModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
