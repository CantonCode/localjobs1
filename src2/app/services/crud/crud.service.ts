import { Injectable } from '@angular/core';
import { Job } from '../../models/job.model';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
    useClass: CrudService,
  })

  export class CrudService {
    REST_API: string = 'https://shrouded-reef-89389.herokuapp.com/api/jobs/';

    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private httpClient: HttpClient) {}

    GetJobs(){
        console.log("GETTING ALL JOBS")
        return this.httpClient.get(`${this.REST_API}`);
    }
}