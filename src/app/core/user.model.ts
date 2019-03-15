import {Injectable} from '@angular/core';

@Injectable()
export class FirebaseUserModel {
  image: string;
  name: string;
  provider: string;

  constructor(){
    this.image = "";
    this.name = "";
    this.provider = "";
  }
}
