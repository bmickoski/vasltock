import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './components/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
