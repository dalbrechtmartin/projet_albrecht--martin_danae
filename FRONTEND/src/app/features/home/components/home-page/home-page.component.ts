import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  nom: string = '';
  prenom: string = '';
  login: string = '';
  pass: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  register() {
    this.authService.register(this.nom, this.prenom, this.login, this.pass).subscribe(
      (res: any) => {
        console.log('User registered successfully', res);
        this.router.navigate(['/']);
      },
      (err: any) => {
        console.error('Error registering user', err);
      }
    );
  }
}