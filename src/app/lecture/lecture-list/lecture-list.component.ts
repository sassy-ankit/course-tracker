import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent implements OnInit {
  courses = this.listService.course;

  constructor(private listService: ListService) {}

  ngOnInit() {}
}
