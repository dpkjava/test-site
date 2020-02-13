import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModRoutingModule } from './login-mod-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginModRoutingModule,
    FormsModule
  ]
})
export class LoginModModule { }
