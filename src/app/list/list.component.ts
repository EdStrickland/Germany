import { Component, OnInit } from '@angular/core';
import { Schools } from '../schools.data';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {

  schools = Schools;

  constructor() { }

  ngOnInit() {
  }

}
