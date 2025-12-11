import { Component } from '@angular/core';
import { ForgotPasswordContainerComponent } from './forgot-password-container/forgot-password-container.component';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { ForgotPasswordSocialButtonsComponent } from './forgot-password-social-buttons/forgot-password-social-buttons.component';
import { ForgotPasswordBackToLoginComponent } from './forgot-password-back-to-login/forgot-password-back-to-login.component';
import { ForgotPasswordDividerComponent } from './forgot-password-divider/forgot-password-divider.component';

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
