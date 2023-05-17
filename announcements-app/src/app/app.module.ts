import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatButtonModule, MatIconButton}  from '@angular/material/button';
import { ByAuthorPipe } from './by-author.pipe';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    CategoriesComponent,
    ByAuthorPipe,
    AddAnnouncementFormComponent,
    HomeComponent,
    EditAnnouncementComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  providers: [
    HubConnectionBuilder,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
