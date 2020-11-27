import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http:HttpClient) { }

  getPhonebookList():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl+'/phonebooks.json')
    .pipe(
      tap(data => data),
      catchError(this.handleError)
    )
  }

  async addContact(data:any){
    return await this.http.post(environment.apiUrl+'/phonebooks', data, {responseType: 'json'}).pipe(
      tap(data => data),
      catchError(this.handleError)
    ).toPromise();
  }

  async modifyContact(data:any,id:any){
    return await this.http.put(environment.apiUrl+'/phonebooks/'+id,data,{responseType: 'json'}).pipe(
      tap(data => data),
      catchError(this.handleError)
    ).toPromise();
  }

  async getContactById(id:any){
    return await this.http.get<any>(environment.apiUrl+'/phonebooks/'+id).pipe(
      tap(data => data),
      catchError(this.handleError)
    ).toPromise();
  }

  handleError(error:any) {
    let errorMessage = '';
    errorMessage = error.error['hydra:description'];
    return throwError(errorMessage);
  }
}
