import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class LoginPageComponent {
  username = '';

  constructor(private router: Router) {}

  continue() {
    if (this.username.trim()) {
      localStorage.setItem('username', this.username);
      this.router.navigate(['/search']);
    }
  }

  cancel() {
    this.username = '';
  }
}