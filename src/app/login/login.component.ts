import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyChqa0uVHU20AQ6em9t_F64Hj5wlWAWZZU",
  databaseURL: 'https://realtimeangular-cb904-default-rtdb.firebaseio.com/'
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  constructor() { 
  }

  ngOnInit(): void {
    
  }

  login(){

    firebase.database().ref('users/').orderByChild('username').equalTo(this.username).once('value', snapshot => {
      if (snapshot.exists()) {
        localStorage.setItem('username', this.username);
      } else {
        const newUser = firebase.database().ref('users/').push();
        newUser.set({
          username : this.username
        })
        localStorage.setItem('username', this.username);
      }
      
    });
  }

}
