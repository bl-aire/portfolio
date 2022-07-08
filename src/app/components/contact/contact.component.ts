import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/data/contact';
import { DataService } from 'src/app/data/data.service';

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

  contact : Contact = { ...this.originalContact };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit', form.valid)
    this.dataService.postContactForm(this.contact).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ',error)
    )
  }
}
