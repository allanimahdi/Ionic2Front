import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
    item: any;
    constructor(public navCtrl: NavController, public params:NavParams) {
        this.item = params.get('item');
    }

facebookShare(){
    SocialSharing.shareViaFacebook("Message via Twitter",null /*Image*/,"http://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

}
