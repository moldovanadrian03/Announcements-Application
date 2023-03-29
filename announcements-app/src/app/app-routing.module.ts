import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditAnnouncementFormComponent } from './edit-announcement-form/edit-announcement-form.component';

const routes: Routes = [
  {path: 'add', component: AddAnnouncementFormComponent},
  {path: 'edit', component: EditAnnouncementFormComponent},
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
