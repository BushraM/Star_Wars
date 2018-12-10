import { Component } from '@angular/core';
//import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { People } from './people';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SW-APP';
}
