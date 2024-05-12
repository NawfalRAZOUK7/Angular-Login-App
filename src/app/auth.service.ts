import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './models/user.model';
import { Credentials } from './models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/auth'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, credentials).pipe(
      catchError(this.handleError<User>('login', null))
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user).pipe(
      catchError(this.handleError<User>('register', null))
    );
  }

  private handleError<T>(operation = 'operation', result: T | null = null) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Optionally, you can show a user-friendly message or log error to backend monitoring service
      return of(result as T);
    };
  }


}
