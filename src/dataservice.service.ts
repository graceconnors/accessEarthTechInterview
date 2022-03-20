//service to share email data across pages
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  emails = ['grace@gmail.com', 
          'grace@yahoo.com', 
          'grace@hotmail.com', 
          'grace@aol.com'
  ];

  deletedEmails = [];

  getEmails() {
    return this.emails;
  }

  getDeletedEmails() {
    return this.deletedEmails;
  }

  updateEmails(i) {
    this.deletedEmails.push(this.emails[i]);
    this.emails.splice(i, 1);
  }
}
