import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatigoriesService {

  constructor(private http:HttpClient) {  }

  getAllCate():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  getSpecificCate(id:string):Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }
}
