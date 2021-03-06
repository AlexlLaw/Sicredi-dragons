import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AUTH_ROUTES } from './auth-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    CoreModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }
