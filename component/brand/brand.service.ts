import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _http: HttpClient) { }
  
  getbrand(){
    console.log("ggggggxxxxxxx")
    return this._http.get('http://localhost:7000/showbrand/',{
    
    });
  }
  deleteBrand(id: number) {
    console.log("subho")
    return this._http.delete('http://localhost:7000/DeleteBrand' + '/' +id)
  }
}
