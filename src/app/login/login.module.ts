import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    LoginRoutes,
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class LoginModule { }
