import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientServices } from '../app/services/httpclients';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { UserComponent } from './dashboard/user/user.component';
import { AddressComponent } from './dashboard/address/address.component';
import { LeftnavigationComponent } from './dashboard/leftnavigation/leftnavigation.component';
import { from } from 'rxjs';
import { AdduserComponent } from './dashboard/adduser/adduser.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    AddressComponent,
    LeftnavigationComponent,
    AdduserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
  { provide: HTTP_INTERCEPTORS , useClass : HttpClientServices, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
