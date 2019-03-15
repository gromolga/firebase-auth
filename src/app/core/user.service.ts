import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(){}

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

}
