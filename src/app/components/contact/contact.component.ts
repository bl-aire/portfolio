import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/data/contact';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  originalContact: Contact = {
    fullname: '',
    email: '',
    message: ''
  };

  contact: Contact = { ...this.originalContact };
  postError = false;
  postErrorMessage = '';

  FormData!: FormGroup;

  constructor(private dataService: DataService, private builder: FormBuilder) { 
    
  }
  ngOnInit(): void {
      this.FormData = this.builder.group({
        Fullname: new FormControl('', [Validators.required]),
        Email: new FormControl('', [Validators.required]),//[Validators.compose([Validators.required, Validators.email])]),
        Message: new FormControl('', [Validators.required])
      })
  }

  get Fullname() {
    return this.FormData.get('Fullname');
  }

  get Email() {
    return this.FormData.get('Email');
  }


  onHttpError(errorResponse: any): void {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(FormData: any) {
    console.log(FormData)
    this.dataService.postContactForm(FormData).subscribe(
    response => {
      location.href = 'https://mailthis.to/confirm'
      console.log(response)
    }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })
  }
}
