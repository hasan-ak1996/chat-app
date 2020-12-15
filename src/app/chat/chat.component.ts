import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyChqa0uVHU20AQ6em9t_F64Hj5wlWAWZZU",
  databaseURL: 'https://realtimeangular-cb904-default-rtdb.firebaseio.com/'
};
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  username :any = '' ;
  message = '';
  chats : any[] = [];
  constructor() {
    this.username = localStorage.getItem('username');
    console.log( this.username);
    firebase.database().ref('chats/').on('value', resp => {
      this.chats = [];
      this.chats = this.snapshotToArray(resp);
      console.log(this.chats)
    });
   }

  ngOnInit(): void {
    
  }
  snapshotToArray(snapshot: any){
    var arr : any []= [];
    snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      arr.push(item);
    });
  return arr;
  }

  sendMessage(){
    const chat = { username :'', message: ''};
    chat.username = this.username;
    chat.message = this.message;
    
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat);
  }



}
