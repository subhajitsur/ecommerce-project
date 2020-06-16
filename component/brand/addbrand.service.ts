import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AddbrandService {
  baseUrl = "http://localhost:7000";
  
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) {
   }
  addbrand(name): Observable<any>{
    
    const brand_const = {name}
    
    return this.http.post(this.baseUrl + '/addbrand/', brand_const ,
    {headers:this.httpHeaders});
  }
}
