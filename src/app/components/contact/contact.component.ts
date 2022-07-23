import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Contact } from 'src/app/data/contact';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  originalContact: Contact = {
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  };

  contact: Contact = { ...this.originalContact };
  postError = false;
  postErrorMessage = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit', form.valid)

    if (form.valid) {
      this.dataService.postContactForm(this.contact).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Bee, fix the error above"
    }
  }
}
