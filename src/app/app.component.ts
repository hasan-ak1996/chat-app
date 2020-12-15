import { Component } from '@angular/core';
import firebase from 'firebase';
import { FirebaseService } from './firebase.service';


const config = {
  apiKey: "AIzaSyChqa0uVHU20AQ6em9t_F64Hj5wlWAWZZU",
  databaseURL: 'https://realtimeangular-cb904-default-rtdb.firebaseio.com/'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username : string ='';
  message : string = ''
  constructor(public firebaseService :FirebaseService) {
    firebase.initializeApp(config);
   
    //var database = firebase.database().ref('users/');
    //database.push().set({
     // username : 'hasan',
     // message : 'test'
   // });

  //  console.log(database);
  }
  sendData(){
    this.firebaseService.writeData(this.username,this.message);
  }

  ngOnInit() {

    
   // var ref = firebase.database().ref('users/');
    //ref.on('child_changed' , function(data) {
     // console.log( 'username :' + data.val().username + ' message : ' +data.val().message);
   // });

        //firebase.database().ref('users/').on('child_added' , function(data) {
     // console.log( 'username :' + data.val().username + ' message : ' +data.val().message);
    //});
  }




  title = 'chat-app';
}
