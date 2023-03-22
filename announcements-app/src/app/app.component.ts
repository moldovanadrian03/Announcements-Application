import { Component } from '@angular/core';
import { Announcement } from './announcement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'announcements-app';

  announcement: Announcement[] = [{
    title:"title: adsa",
    author: "author: asdsa",
    message:"message: dasd",
    category: {id: "1", name: "asadad"}
  }];
}
