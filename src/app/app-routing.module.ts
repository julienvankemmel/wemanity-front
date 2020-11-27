import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:'', component:ContactsComponent},
  {path:'add-contact', component:AddcontactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
