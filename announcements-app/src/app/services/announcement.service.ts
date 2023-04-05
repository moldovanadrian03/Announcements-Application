import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Observable, of } from 'rxjs';
import { Category } from '../category';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  baseURL = "https://newsapi20221108120432.azurewebsites.net/api/Announcements";
  announcements: Announcement[] =[
    {
      id: 1,
      title: "title: adsa",
      author: "author: asdsa",
      message: "message: dasd",
      category: {id: "1", name: "asadad"},
      imageUrl: '03vision.info'
    },
    {
      id: 2,
      title:"title: adsadsad",
      author: "author: asdsaadsadsa",
      message:"message: dasddasdsa",
      category: {id: "2", name: "asadadadsa"},
      imageUrl: '03vision.info'
    },
    {
      id: 3,
      title:"Curs3",
      author: "🌪️",
      message:"message: dasddasdsa",
      category: {id: "2", name: "asadadadsa"},
      imageUrl: '03vision.info'
    },
    {
      id: 4,
      title:"Curs4",
      author: "🌪️",
      message:"message: dasddasdsa",
      category: {id: "3", name: "adssa"},
      imageUrl: '03vision.info'
    }];
  constructor(private httpClient: HttpClient) { }

  serviceCall(){
    console.log("Service was called.");
  }

  getAnnouncements() {
    return of(this.announcements);
  }
  //8
  getAnn(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseURL);
  }

  get(id: number){
    return this.announcements[id];
  }

  getId(announcement: Announcement) {
    return this.announcements.indexOf(announcement);
  }

  addAnnouncement(announcement: Announcement) {
    //this method will add an annoucement to the array an return the id of the announcement
    //where the id = index
    let newLength = this.announcements.push(announcement);
    return newLength - 1;
  }

  update(id: number, title: string, author: string, message: string, category: Category, imageUrl: string) {
    let announcement = this.announcements[id];
    announcement.title = title;
    announcement.author = author;
    announcement.message = message;
    announcement.category = category;
    announcement.imageUrl = imageUrl;
  }

  delete(id: number) {
    this.announcements.splice(id, 1);
  }

  readonly httpOption = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
}
