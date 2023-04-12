import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {
  announcement: Announcement[];
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  message: string;
  selectedCategory: Category;

  categories: Category[] = [
    {
      id: '1',
      name: 'Course'
    },
    {
      id: '2',
      name: 'Laboratory'
    },
    {
      id: '3',
      name: 'General'
    }];

    constructor(private announcementService: AnnouncementService, private router: Router, private activateRoute: ActivatedRoute)
  {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
}


    addAnnouncement():void {
        let announcement:Announcement={
        title:this.title,
        author:this.author,
        imageUrl:this.imageUrl,
        message:this.message,
        Category:this.selectedCategory,
        id:this.id
        }
        this.announcementService.addAnnouncementToServer(announcement);
        console.log(announcement);
        this.router.navigateByUrl("''");
    }

    updateAnnouncement(announcement: Announcement): void {

    }
}
