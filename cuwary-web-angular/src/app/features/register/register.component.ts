import { Component } from '@angular/core';
import { RegisterContainerComponent } from './components/register-container/register-container.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterDividerComponent } from './components/register-divider/register-divider.component';
import { RegisterSocialButtonsComponent } from './components/register-social-buttons/register-social-buttons.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';

@Component({
  selector: 'app-register',
  imports: [
    RegisterContainerComponent,
    RegisterFormComponent,
    RegisterDividerComponent,
    RegisterSocialButtonsComponent,
    RegisterLoginComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
