import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/data/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  originalContact : Contact = {
    firstname: 'Blaire',
    lastname: 'Ogoh',
    email: 'ogoh_blessing@yahoo.com',
    message: 'Hi, Bee'
  };

  Contact : Contact = { ...this.originalContact };

  constructor() { }

  ngOnInit(): void {
  }

}
