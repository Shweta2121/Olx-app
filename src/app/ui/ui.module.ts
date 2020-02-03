import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "../auth/register/register.component";
import { AuthRoutingModule } from "../auth/auth-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppbarComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule, AuthRoutingModule, ReactiveFormsModule, HttpClientModule, FormsModule
  ],
  exports: [AppbarComponent, AuthRoutingModule,
    LoginComponent, RegisterComponent]
})
export class UiModule { }
