import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckBookService {
  readonly APIurl = "https://localhost:7282/Bank/";

  constructor(private http: HttpClient) { }
  AddCb(CbRequest:any) : Observable<any>{
    return this.http.post(this.APIurl + "Checkbook/Add",CbRequest,{responseType:'text'});
  }
}
