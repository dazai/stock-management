import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private allCategories: Array<Category>;
  private category: Category;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  findAllCategories(): void {
    this.categoryService.getAll().pipe().subscribe(data => this.allCategories = data);
  }

  findCategoryById(id: number) {
    this.categoryService.getOne(id).pipe().subscribe(data => this.category = data);
  }

  addCategory(article:Category){
    this.categoryService.addCategory(article);
  }

  //updateArticle(article:Category){
    //this.categoryService.updateCategory(article);
  //}
  
  //deleteCategory(article:Category){
    //this.categoryService.deleteCategory(article);
  //}


  

}