import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getCategories(category: Category) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }


  getProduct(val:number):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products?categoryId="+val)
  }
  
  addProduct(product:Product):Observable<Product>{

    return this.http.post<Product>("http://localhost:3000/products",product)

  }
  deleteProduct(val:number):Observable<Product[]>{

    return this.http.delete<Product[]>("http://localhost:3000/products/"+val)

  }

 
}
