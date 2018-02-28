import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { ListService } from './lecture/shared/list.service';

import { AppComponent } from './app.component';
import { LectureComponent } from './lecture/lecture.component';
import { LectureListComponent } from './lecture/lecture-list/lecture-list.component';
import { AddLecturesComponent } from './lecture/add-lectures/add-lectures.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'header', component: LectureListComponent },
  { path: 'list', component: LectureListComponent },
  { path: 'add', component: AddLecturesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LectureComponent,
    LectureListComponent,
    AddLecturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
