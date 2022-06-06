import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers:[CategoryService]
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  selectedCategory: Category;
  filterText:string

  constructor(private categoryService:CategoryService, ) {
  
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
  changeCategory():void{
    window.location.href="/product/"+this.selectedCategory.id

  }


}



