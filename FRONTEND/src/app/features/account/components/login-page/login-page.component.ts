import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Login data:', this.username, this.password); // debug
    this.authService.login(this.username, this.password).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      (err: any) => {
        console.error(err);
      }
    );
  }
}