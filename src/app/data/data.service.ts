import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postContactForm(contact: Contact) : Observable<Contact> {
    return of(contact);
  }
}
