import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    announcement: Announcement[];
    noteId: number;
    new: boolean;
    add: any;

    selectedCategory: Category;
    filteredAnnouncements: Announcement[];

    constructor(private announcementService: AnnouncementService, private router: Router) {}

    ngOnInit(): void {
      this.announcementService.serviceCall();

      this.announcementService.getAnnouncements().subscribe(announcements => {
        console.log("Announcements list: ", announcements);
        this.announcement = announcements;
        this.filteredAnnouncements = this.announcement;
      });

    }

    filterAnnouncementBasedOnCategory(category: Category){
      if(!category){
        this.filteredAnnouncements = this.announcement;
      }
      else{
        this.filteredAnnouncements = this.filteredAnnouncements = this.announcement.filter(a => a.Category.id === category.id);
      }
      console.log("Am ajuns in app component cu " + category?.name);
    }
}
