import { Component } from '@angular/core';

import { LoginSocialButtonsComponent } from './components/login-social-buttons/login-social-buttons.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LoginDividerComponent } from './components/login-divider/login-divider.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';

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
