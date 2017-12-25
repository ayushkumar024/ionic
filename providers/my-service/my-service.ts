//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyServiceProvider {

  constructor(public http: Http) {
    console.log('Hello MyServiceProvider Provider');
  }
  findAllUsers(){
    let ep='http://localhost:3000/users/all';
    return this.http.get(ep).map(res=>res.json());
  }

  adduser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = 'http://localhost:3000/users/register';
    return this.http.post(ep,user,{ headers: headers }).map(res => res.json());
  }

}
