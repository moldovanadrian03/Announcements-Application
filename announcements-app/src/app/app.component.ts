import { Component } from '@angular/core';
import { Announcement } from './announcement';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  announcement: Announcement[] =[
  {
    title: "title: adsa",
    author: "author: asdsa",
    message: "message: dasd",
    category: {id: "1", name: "asadad"}
  },
  {
    title:"title: adsadsad",
    author: "author: asdsaadsadsa",
    message:"message: dasddasdsa",
    category: {id: "2", name: "asadadadsa"}
  }];

  selectedCategory: Category;
}
