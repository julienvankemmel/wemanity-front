import { Component, OnInit, ViewChild } from '@angular/core';
import { PhonebookService } from '../services/phonebook.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'phone', 'action'];
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private  phonebookService:PhonebookService) { }
  
  dataSource = new MatTableDataSource<Element>();
  contactList:any;
  
  ngOnInit(): void {
    this.contactList = this.phonebookService.getPhonebookList().subscribe(
      data => {
        this.contactList = data;
        this.dataSource.data = this.contactList;
      }
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
