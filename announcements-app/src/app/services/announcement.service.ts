import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  announcement: Announcement[] =[
    {
      id: '1',
      title: "title: adsa",
      author: "author: asdsa",
      message: "message: dasd",
      category: {id: "1", name: "asadad"},
      imageUrl: '03vision.info'
    },
    {
      id: '2',
      title:"title: adsadsad",
      author: "author: asdsaadsadsa",
      message:"message: dasddasdsa",
      category: {id: "2", name: "asadadadsa"},
      imageUrl: '03vision.info'
    },
    {
      id: '3',
      title:"Curs3",
      author: "🌪️",
      message:"message: dasddasdsa",
      category: {id: "2", name: "asadadadsa"},
      imageUrl: '03vision.info'
    },
    {
      id: '4',
      title:"Curs4",
      author: "🌪️",
      message:"message: dasddasdsa",
      category: {id: "3", name: "adssa"},
      imageUrl: '03vision.info'
    }];
  constructor() { }

  serviceCall(){
    console.log("Service was called.");
  }

  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcement);
  }
}
