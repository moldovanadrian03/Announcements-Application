import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from '../category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent {

  newAnn: Announcement[];
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

    constructor(private announcementService: AnnouncementService, private activateRoute: ActivatedRoute, private router: Router)
  {
    // this.activateRoute.params.subscribe(params => {
    //   this.id = params['id'];
    //   console.log(this.id);
    // });
}
  updateAnnouncement(form: NgForm) {
     this.announcementService.getAnnouncementById(this.id).subscribe(r => {
      console.log(r[0]);
      let newAnn: Announcement={
        title: form.value.title,
        author:form.value.author,
        imageUrl:form.value.imageUrl,
        message:form.value.message,
        categoryId:form.value.selectedCategory,
        id:r[0].id
      }
      this.announcementService.updateAnnouncement(newAnn);
      this.router.navigateByUrl("''");
    });

  }

}
