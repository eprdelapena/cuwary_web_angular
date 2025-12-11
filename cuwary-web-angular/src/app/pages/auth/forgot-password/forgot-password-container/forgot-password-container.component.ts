import { Component } from '@angular/core';
import { ForgotPasswordHeaderComponent } from '../forgot-password-header/forgot-password-header.component';
import { ForgotPasswordPolicyComponent } from '../forgot-password-policy/forgot-password-policy.component';

@Component({
  selector: 'app-forgot-password-container',
  imports: [
    ForgotPasswordHeaderComponent,
    ForgotPasswordPolicyComponent
  ],
  templateUrl: './forgot-password-container.component.html',
  styleUrl: './forgot-password-container.component.css'
})
export class ForgotPasswordContainerComponent {

}
