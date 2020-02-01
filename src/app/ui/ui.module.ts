import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "../auth/register/register.component";
import { AuthRoutingModule } from "../auth/auth-routing.module";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [AppbarComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule, AuthRoutingModule, ReactiveFormsModule
  ],
  exports: [AppbarComponent, AuthRoutingModule,
    LoginComponent, RegisterComponent]
})
export class UiModule { }
