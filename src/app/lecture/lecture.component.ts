import { Component, OnInit } from '@angular/core';
import { ListService } from './shared/list.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
  constructor(private listService: ListService) {}

  ngOnInit() {}
}
