import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http:HttpClient) { }

  getPhonebookList():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl+'/phonebooks.json')
    .pipe(
      tap(data => data)
    )
  }

  async addContact(data:any){
    return await this.http.post(environment.apiUrl+'/phonebooks', data, {responseType: 'json'}).toPromise();
  }

}
