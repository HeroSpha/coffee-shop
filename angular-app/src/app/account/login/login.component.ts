import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticatedResponse } from '../models/authresult.model';
import { ErrorResponse } from '../models/error-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  errorResponse!: ErrorResponse;
  api = environment.apiUrl + '/auth/login';
  loginForm!: FormGroup;
  constructor(private router: Router, private http: HttpClient) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.http
      .post<AuthenticatedResponse>(this.api, this.loginForm.value, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe({
        next: (resp: any) => {
          localStorage.setItem('jwt', resp.token);
          this.router.navigate(['/shop']);
        },
        error: (err: HttpErrorResponse) => {
          this.errorResponse = err.error;
        },
      });
  }
}
