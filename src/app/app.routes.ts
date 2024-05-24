import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'search', component: SearchPageComponent, canActivate: [AuthGuard] }
];