import { Component, OnInit } from '@angular/core';

import { Newses } from '../news.data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.styl']
})
export class NewsComponent implements OnInit {
  newses = Newses;
  constructor() { }

  ngOnInit() {
  }

}
