import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../services/phonebook.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  addContactForm!: FormGroup;
  form:any=[];
  response:any;
  constructor(private phonebookService:PhonebookService, private router:Router) { }

  ngOnInit(): void {
    this.addContactForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('',Validators.required),
      phone: new FormControl('', Validators.required)
    })
  }

  async onSubmit(){
    this.form={
      "firstname": this.addContactForm.value.firstname,
      "lastname": this.addContactForm.value.lastname,
      "phone": this.addContactForm.value.phone
    }
    await this.phonebookService.addContact(this.form);
      this.router.navigateByUrl('');
  }

}
