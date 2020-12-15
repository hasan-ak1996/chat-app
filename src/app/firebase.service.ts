import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  
  constructor() {
   

   }

   writeData(name : string,message : string){
     firebase.database().ref('users/').push().set({
       username : name,
       message : message
     });
     firebase.database().ref('users/').on('child_added' , function(data) {
      console.log( 'username :' + data.val().username + ' message : ' +data.val().message);
    });
   }
}
