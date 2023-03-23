import { Component } from '@angular/core';

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
}
