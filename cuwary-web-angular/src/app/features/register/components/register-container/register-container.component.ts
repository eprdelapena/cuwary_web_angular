import { Component } from '@angular/core';
import { RegisterHeaderComponent } from '../register-header/register-header.component';
import { RegisterPolicyComponent } from '../register-policy/register-policy.component';

@Component({
  selector: 'app-register-container',
  imports: [
    RegisterHeaderComponent,
    RegisterPolicyComponent
  ],
  templateUrl: './register-container.component.html',
  styleUrl: './register-container.component.css'
})

export class RegisterContainerComponent {

}
