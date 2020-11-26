import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../services/phonebook.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private  phonebookService:PhonebookService) { }
  contactList:any;
  ngOnInit(): void {
    this.contactList = this.phonebookService.getPhonebookList().subscribe(
      data => {
        this.contactList = data;
      }
    )
  }

}
