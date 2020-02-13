import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { UserComponent } from './dashboard/user/user.component';
import { AddressComponent } from './dashboard/address/address.component';
import { LoggedinGuard } from '../app/services/loggedin.guard';
import { UserroleGuard } from '../app/services/userrole.guard';
import { AdduserComponent } from './dashboard/adduser/adduser.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path : 'login' , loadChildren : ()=> import ('./login-mod/login-mod.module').then(m => m.LoginModModule)},
  { path : 'dashboard', component: DashboardComponent, canActivate:[LoggedinGuard], children:[    
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'adduser', component: AdduserComponent, canActivate:[UserroleGuard]},
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
