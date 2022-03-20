import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../../dataservice.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
})
export class TrashPage implements OnInit {

  emails = [];

  constructor(public dataservice: DataserviceService) { }

  ngOnInit() {
    this.emails = this.dataservice.getDeletedEmails();
  }


}
