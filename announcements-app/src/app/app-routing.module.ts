import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';

const routes: Routes = [
  {path: 'add', component: AddAnnouncementFormComponent},
  {path: 'add/:id', component: AddAnnouncementFormComponent},
  {path: 'update/:id', component: EditAnnouncementComponent},
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
