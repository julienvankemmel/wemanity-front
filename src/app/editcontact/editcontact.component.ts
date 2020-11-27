import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../services/phonebook.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  editContactForm!: FormGroup;
  form:any=[];
  response:any;
  id:any;
  contact:any;
  constructor(private phonebookService:PhonebookService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params.id);
    this.phonebookService.getContactById(this.id).then(data =>{
      this.editContactForm = new FormGroup({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('',Validators.required),
        phone: new FormControl('', Validators.required)
      })
      this.editContactForm.setValue({
        "firstname": data.firstname,
        "lastname": data.lastname,
        "phone": data.phone
      })
    }
    )
    
  }

  async onSubmit(){
    this.form={
      "firstname": this.editContactForm.value.firstname,
      "lastname": this.editContactForm.value.lastname,
      "phone": this.editContactForm.value.phone
    }
    await this.phonebookService.modifyContact(this.form, this.id).then(
      data => {
        this.router.navigateByUrl('')
      },
      error => alert(error)
    );
    
  }

}
