import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {
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

    addAnnouncement():void {
      let announcement: Announcement = {
        id: undefined,
        title: this.title,
        author: this.author,
        imageUrl: this.imageUrl,
        message: this.message,
        category: this.selectedCategory
      }
      console.log(announcement);
    }
}
