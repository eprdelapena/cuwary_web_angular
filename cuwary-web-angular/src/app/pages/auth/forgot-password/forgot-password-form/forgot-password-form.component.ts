import { Component } from '@angular/core';
import { LucideAngularModule, Lock, Mail } from 'lucide-angular';

@Component({
  selector: 'app-forgot-password-form',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.css'
})
export class ForgotPasswordFormComponent {
  readonly Lock = Lock
  readonly Mail = Mail
}
