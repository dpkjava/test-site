import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { UserComponent } from './dashboard/user/user.component';
import { AddressComponent } from './dashboard/address/address.component';
import { LoggedinGuard } from '../app/services/loggedin.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path : 'login' , component: LoginComponent },
  { path : 'dashboard', component: DashboardComponent, canActivate:[LoggedinGuard], children:[    
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'user', component: UserComponent},
    {path: 'address', component: AddressComponent}

  ]},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
