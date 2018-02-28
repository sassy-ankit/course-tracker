import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-add-lectures',
  templateUrl: './add-lectures.component.html',
  styleUrls: ['./add-lectures.component.css']
})
export class AddLecturesComponent implements OnInit {
  constructor(private listService: ListService) {}

  ngOnInit() {}
}
