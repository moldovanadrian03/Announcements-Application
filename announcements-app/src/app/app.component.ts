import { Component } from '@angular/core';
import { Announcement } from './announcement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'announcements-app';

  announcement: Announcement;
}
