import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  announcement: Announcement[] =[
    {
      id: '1',
      title: "title: adsa",
      author: "author: asdsa",
      message: "message: dasd",
      category: {id: "1", name: "asadad"},
      imageUrl: '03vision.info'
    },
    {
      id: '2',
      title:"title: adsadsad",
      author: "author: asdsaadsadsa",
      message:"message: dasddasdsa",
      category: {id: "2", name: "asadadadsa"},
      imageUrl: '03vision.info'
    },
    {
      id: '3',
      title:"Curs3",
      author: "🌪️",
      message:"message: dasddasdsa",
      category: {id: "2", name: "asadadadsa"},
      imageUrl: '03vision.info'
    },
    {
      id: '4',
      title:"Curs4",
      author: "🌪️",
      message:"message: dasddasdsa",
      category: {id: "3", name: "adssa"},
      imageUrl: '03vision.info'
    }];    add: any;

    selectedCategory: Category;
    filteredAnnouncements: Announcement[] = this.announcement;

    constructor(private announcementService: AnnouncementService) {}

    ngOnInit(): void {
      this.announcementService.serviceCall();
    }

    filterAnnouncementBasedOnCategory(category: Category){
      if(!category){
        this.filteredAnnouncements = this.announcement;
      }
      else{
        this.filteredAnnouncements = this.filteredAnnouncements = this.announcement.filter(a => a.category.id === category.id);
      }
      console.log("Am ajuns in app component cu " + category?.name);
    }
}
