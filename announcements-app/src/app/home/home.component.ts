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
    announcement: Announcement[];
    add: any;

    selectedCategory: Category;
    filteredAnnouncements: Announcement[];

    constructor(private announcementService: AnnouncementService) {}

    ngOnInit(): void {
      this.announcementService.serviceCall();
      this.announcement = this.announcementService.getAnnouncements();

      this.filteredAnnouncements = this.announcement;
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
