import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

import { Schools } from '../schools.data';
import { School } from '../school';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.styl']
})
export class DetailComponent implements OnInit {
  school: School;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSchool();
  }

  changeTarget(event: any, sId: string) {
    $('.page-content-changer .selected').removeClass('selected');
    $(event.currentTarget).addClass('selected');
    $('.page-content-content .display').removeClass('display');
    $('.page-content-block[target=' + sId + ']').addClass('display');
    switch (sId) {
      case 'description':
        break;
      case 'underGraduate':
        break;
      case 'postGraduate':
        break;
    }
    return;
  }

  getSchool() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.school = Schools[id - 1];
  }
}
