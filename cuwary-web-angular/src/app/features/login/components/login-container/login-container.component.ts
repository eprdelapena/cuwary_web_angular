import { Component } from '@angular/core';
import { LoginHeaderComponent } from '../login-header/login-header.component';
import { LoginPolicyComponent } from '../login-policy/login-policy.component';

@Component({
  selector: 'app-login-container',
  imports: [
    LoginHeaderComponent,
    LoginPolicyComponent
  ],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.css'
})
export class LoginContainerComponent {

}
