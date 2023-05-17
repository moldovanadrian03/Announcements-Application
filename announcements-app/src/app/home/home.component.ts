import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    announcement: Announcement[] = [];
    noteId: number;
    new: boolean;
    add: any;

    selectedCategory: Category;
    filteredAnnouncements: Announcement[] = [];

    notificationMessage: any;

    constructor(
      private announcementService: AnnouncementService,
      private router: Router,
      private notificationService: NotificationService) {}

    ngOnInit(): void {
      this.announcementService.serviceCall();

      this.announcementService.getAnnouncements().subscribe(announcements => {
        console.log(announcements);
        this.announcement = announcements;
        this.filteredAnnouncements = this.announcement;
      });

      // this.notificationService.initWebSocket();
      // this.notificationService.notificationSubject.subscribe(hasNotifications => {
      //   this.notificationMessage = hasNotifications ? "New notifications, please refresh the page." : "";
      // });
    }

    filterAnnouncementBasedOnCategory(category: Category){
      if(!category){
        this.filteredAnnouncements = this.announcement;
      }
      else{
        this.filteredAnnouncements = this.filteredAnnouncements = this.announcement.filter(a => a.categoryId === category.id);
        console.log(this.filteredAnnouncements);
      }
      console.log("Am ajuns in app component cu " + category?.name);
    }

    updateAnnoucementList(update: boolean){
      if(update) {
        this.announcementService.getAnnouncements().subscribe(announcements => {
          console.log("Announcements list: ", announcements);
          this.announcement = announcements;
          this.filteredAnnouncements = this.announcement;

        });
      }
    }
}
