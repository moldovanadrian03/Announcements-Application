import { Component } from '@angular/core';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-edit-announcement-form',
  templateUrl: './edit-announcement-form.component.html',
  styleUrls: ['./edit-announcement-form.component.scss']
})
export class EditAnnouncementFormComponent {
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

  constructor(private announcementService: AnnouncementService) {}

  editAnnouncement(announcement: Announcement): void {
  }
}
