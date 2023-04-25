import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from './models/authresult.model';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorResponse } from './models/error-response';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [],
})
export class AccountComponent {
 
}
