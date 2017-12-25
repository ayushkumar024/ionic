import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyServiceProvider } from '../../providers/my-service/my-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  USERS=[];

  constructor(public navCtrl: NavController,private MyServiceProvider:MyServiceProvider) {

  }
  showUsers(){
    this.MyServiceProvider.findAllUsers().subscribe(data=>{
      console.log(data);
      if (data.success){
        this.USERS=data.users;
      }
    });
  }


}
