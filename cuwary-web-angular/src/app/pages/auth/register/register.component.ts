import { Component } from '@angular/core';
import { RegisterContainerComponent } from './register-container/register-container.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterDividerComponent } from './register-divider/register-divider.component';
import { RegisterSocialButtonsComponent } from './register-social-buttons/register-social-buttons.component';
import { RegisterLoginComponent } from './register-login/register-login.component';

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
