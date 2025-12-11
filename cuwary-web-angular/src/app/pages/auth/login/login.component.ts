import { Component } from '@angular/core';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginSocialButtonsComponent } from './login-social-buttons/login-social-buttons.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LoginDividerComponent } from './login-divider/login-divider.component';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [
    LoginContainerComponent,
    LoginSocialButtonsComponent,
    LoginSignupComponent,
    LoginDividerComponent,
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
