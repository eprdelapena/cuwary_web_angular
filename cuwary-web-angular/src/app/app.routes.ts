import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import CONS_URL_ROUTES from './shared/constant/constant.routes';


export const routes: Routes = [
    { path: CONS_URL_ROUTES.LOGIN, component: LoginComponent },
    { path: CONS_URL_ROUTES.REGISTER, component: RegisterComponent },
    { path: CONS_URL_ROUTES.FORGOT_PASSWORD, component: ForgotPasswordComponent }
];
