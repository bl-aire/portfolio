import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { Project } from "./project";

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private projectUrl = 'assets/projects.json';

  constructor(private httpClient: HttpClient) {}

  getProjects() {
    return this.httpClient.get(this.projectUrl)
  }

  //private handleError(err:HttpErrorResponse){
    //let errorMessage = '';
    //if (err.error instanceof ErrorEvent) {
     // errorMessage = `An error occured: ${err.error.message}`;
   // } else {
    //  errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    //}
    //console.error(errorMessage);
    //return throwError(errorMessage);
  //}
}