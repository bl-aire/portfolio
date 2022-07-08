import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postContactForm(contact: Contact) : Observable<any> {

    return this.http.post('https://putsreq.com/2OYIIEhZBCBuekxXhORK', contact);
    //return of(contact);
  }
}
