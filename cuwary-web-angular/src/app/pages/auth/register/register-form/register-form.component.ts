import { Component } from '@angular/core';
import { LucideAngularModule, Lock, Mail } from 'lucide-angular';

@Component({
  selector: 'app-register-form',
  imports: [LucideAngularModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  readonly Lock=Lock
  readonly Mail=Mail
}
