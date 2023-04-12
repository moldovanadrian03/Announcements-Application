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

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


  // announcements: Announcement[] =[
  //   {
  //     id: 1,
  //     title: "title: adsa",
  //     author: "author: asdsa",
  //     message: "message: dasd",
  //     category: {id: "1", name: "asadad"},
  //     imageUrl: '03vision.info'
  //   },
  //   {
  //     id: 2,
  //     title:"title: adsadsad",
  //     author: "author: asdsaadsadsa",
  //     message:"message: dasddasdsa",
  //     category: {id: "2", name: "asadadadsa"},
  //     imageUrl: '03vision.info'
  //   },
  //   {
  //     id: 3,
  //     title:"Curs3",
  //     author: "🌪️",
  //     message:"message: dasddasdsa",
  //     category: {id: "2", name: "asadadadsa"},
  //     imageUrl: '03vision.info'
  //   },
  //   {
  //     id: 4,
  //     title:"Curs4",
  //     author: "🌪️",
  //     message:"message: dasddasdsa",
  //     category: {id: "3", name: "adssa"},
  //     imageUrl: '03vision.info'
  //   }];
  constructor(private httpClient: HttpClient) { }

  serviceCall(){
    console.log("Service was called.");
  }

    //8
    getAnnouncements(): Observable<Announcement[]> {
      console.log("Server Announcements: ");
      return this.httpClient.get<Announcement[]>(this.baseURL, this.httpOptions);
    }

    addAnnouncementToServer(announcement: Announcement) {
      const body = {...announcement, category: announcement.Category.name};
      // body v-a primi tot ce e in ann inafara de category unde v-a primi doar numele

      console.log("Announcement: ", body, " is added.");

      this.httpClient.post(this.baseURL, body, this.httpOptions).subscribe(response => {
        return response;
      });

    }

    updateAnnouncement(announcement: Announcement) {
      let announcementId = announcement.id;
      const body = {... announcement, category: announcement.Category.name};
      console.log("Announcement ", announcementId, ": ", body, " is updated.");

      this.httpClient.put(this.baseURL, body, this.httpOptions).subscribe(response => {
        return response;
      });
    }

    deleteAnnouncement(id: string) {
      console.log("Announcement ", id, " is deleted.");
      return this.httpClient.delete(this.baseURL + "/" + id, this.httpOptions);
    }


  //https://material.angular.io/assets/img/examples/shiba2.jpg




  // getAnnouncements() {
  //   return of(this.announcements);
  // }

  // get(id: number){
  //   return this.announcements[id];
  // }

  // getId(announcement: Announcement) {
  //   return this.announcements.indexOf(announcement);
  // }

  // addAnnouncement(announcement: Announcement) {
  //   //this method will add an annoucement to the array an return the id of the announcement
  //   //where the id = index
  //   let newLength = this.announcements.push(announcement);
  //   return newLength - 1;
  // }

  // update(id: number, title: string, author: string, message: string, category: Category, imageUrl: string) {
  //   let announcement = this.announcements[id];
  //   announcement.title = title;
  //   announcement.author = author;
  //   announcement.message = message;
  //   announcement.category = category;
  //   announcement.imageUrl = imageUrl;
  // }

  // delete(id: number) {
  //   this.announcements.splice(id, 1);
  // }

}
