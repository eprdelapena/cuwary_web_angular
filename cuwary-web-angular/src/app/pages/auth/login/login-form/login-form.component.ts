import { Component } from '@angular/core';
import { LucideAngularModule,  Lock, Eye, Mail} from 'lucide-angular';

@Component({
  selector: 'app-login-form',
  imports: [LucideAngularModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {
  readonly Lock=Lock
  readonly Eye=Eye
  readonly Mail=Mail
}
