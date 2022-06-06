import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
  selectedCategoryId:number=1
  filterText:string
  sayac:number
  
  
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct()
  
  }

  getProduct(){

    this.activatedRoute.params.subscribe(params=>{
      if(params["id"])
      this.selectedCategoryId=params["id"]
    })
    this.productService.getProduct(this.selectedCategoryId).subscribe(data=>{
      this.products=data
    })
  }
  deleteProduct(val:number){
    if(confirm("Are you sure to delete ")) {
      this.productService.deleteProduct(val).subscribe()
    }
  
    
  }
  
}
