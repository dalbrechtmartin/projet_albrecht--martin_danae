import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${environment.backendLoginClient}`, { login, password }, { headers });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  register(nom: string, prenom: string, login: string, pass: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${environment.backendLoginClient}/api/utilisateur/register`, { nom, prenom, login, pass }, { headers });
  }
}