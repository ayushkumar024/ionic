import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Toast } from 'ionic-angular/components/toast/toast';
import { MyServiceProvider } from '../../providers/my-service/my-service';
import { ToastController } from 'ionic-angular';
import * as io from 'socket.io-client';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  email:String;
  username:String;
  password:String;
  show="";
  socket;
  socketshow="";
  constructor(public navCtrl: NavController,private MyServiceProvider: MyServiceProvider,
    public toastCtrl: ToastController) {
      this.socket=io("http://localhost:3000");
      this.socket.on("topic1",(msg)=>{
        this.socketshow=JSON.stringify(msg.payload);
        console.log(msg);
      });

  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Registered',
      duration: 2000
    });
    toast.present();
  }
  addusers(){
    let user ={
      email:this.email,
      username:this.username,
      password:this.password
    };
    this.MyServiceProvider.adduser(user).subscribe(data=>{
      this.show=data.msg;
    });
    this.email="";
    this.username="";
    this.password="";
    this.presentToast();
  }

}


