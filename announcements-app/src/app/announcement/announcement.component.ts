import { Component, Input, OnInit } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  @Input() message: string;
  @Input() title: string;
  @Input() author: string;
  @Input() imageUrl: string;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.announcementService.getAnn().subscribe((response) => {
      console.log(response);
    })
  }
}
