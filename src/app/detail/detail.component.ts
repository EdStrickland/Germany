import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.styl']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}
