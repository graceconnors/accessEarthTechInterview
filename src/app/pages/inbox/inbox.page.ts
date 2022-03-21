import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataserviceService } from '../../../dataservice.service'

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  display='none';

  emails= [];

  constructor(public alertController: AlertController,
   public dataservice: DataserviceService) { }

  ngOnInit() {
    this.emails = this.dataservice.getEmails();
  }

  del(i) {
    this.dataservice.updateEmails(i);
    console.log(this.emails);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Enter a new email',
      inputs: [
        {
          id: 'newEmail',
          name: 'email',
          type: 'text',
          placeholder: 'ex: grace@nd.edu'
        }
      ],
      buttons: [
        {
          text: 'submit',
          handler: (data) => { 
            console.log('Email added');
            // this.emails.push(data.email);
            this.dataservice.insertEmail(data.email);
            console.log("added");
          }
        }
      ]
    });

    await alert.present();

  }

  
  

}


