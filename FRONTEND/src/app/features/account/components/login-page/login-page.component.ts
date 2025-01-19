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

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/account']);
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/account']);
      },
      (err: any) => {
        console.error(err);
      }
    );
  }
}