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

    return this.http.post('https://formsubmit.co/ogoh_blessing@email.com', contact);
    //return of(contact);  https://putsreq.com/2OYIIEhZBCBuekxXhORK'
  }
}
