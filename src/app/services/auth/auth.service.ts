import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Client } from '../../models/client-model/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/cliente/login`, { email, password }).pipe(
      catchError((err) => {
        console.error('Erro ao fazer requisição ao back-end:', err);
        return throwError(() => err);
      })
    );
  }

  saveClientData(response: Client): void {
    sessionStorage.setItem('loggedClientData', JSON.stringify(response));
  }

  getClientCpf(): string | null {
    return sessionStorage.getItem('loggedClientCpf');
  }

  clearClientCpf(): void {
    sessionStorage.removeItem('loggedClientCpf')
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  checkLogin(): boolean {
    return this.isLoggedIn;
  }
}
