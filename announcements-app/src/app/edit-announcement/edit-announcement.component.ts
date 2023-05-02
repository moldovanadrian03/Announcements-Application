import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent {

  announcement: Announcement[];
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  message: string;
  selectedCategory: string;

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

    constructor(private activateRoute: ActivatedRoute)
  {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
}
  updateAnnouncement() {
    throw new Error('Method not implemented.');
  }

}
