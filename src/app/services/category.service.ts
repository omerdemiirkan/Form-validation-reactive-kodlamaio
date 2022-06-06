
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:3000/categories")
  }

  addCategory(category:Category):Observable<Category>{

    return this.http.post<Category>("http://localhost:3000/categories",category)

  }

}
