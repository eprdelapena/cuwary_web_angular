import { Component } from '@angular/core';

import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { ForgotPasswordSocialButtonsComponent } from './components/forgot-password-social-buttons/forgot-password-social-buttons.component';
import { ForgotPasswordBackToLoginComponent } from './components/forgot-password-back-to-login/forgot-password-back-to-login.component';
import { ForgotPasswordDividerComponent } from './components/forgot-password-divider/forgot-password-divider.component';
import { ForgotPasswordContainerComponent } from './components/forgot-password-container/forgot-password-container.component';

@Component({
  selector: 'app-forgot-password',
  imports: [
    ForgotPasswordContainerComponent,
    ForgotPasswordFormComponent,
    ForgotPasswordDividerComponent,
    ForgotPasswordSocialButtonsComponent,
    ForgotPasswordBackToLoginComponent
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

}
