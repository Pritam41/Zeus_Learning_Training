
import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection,Timestamp,addDoc
  
}
from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDFEFrlFG2Qtz598Sma9MsKRwYmt5AJoJo",
    authDomain: "fir-9-dojo-45e3e.firebaseapp.com",
    projectId: "fir-9-dojo-45e3e",
    storageBucket: "fir-9-dojo-45e3e.appspot.com",
    messagingSenderId: "587620462425",
    appId: "1:587620462425:web:f090e71ef272c8530ce648"
  };
  //init firebase app
  initializeApp(firebaseConfig)
  //init services
  const db = getFirestore();


//adding new chat docs
class Chatroom {
    constructor(room, username){
      this.room = room;
      this.username = username;
      this.chats = collection(db,'chats');
    }
    async addChat(message){
      // format a chat object
      const now = new Date();
      const chat = {
        message: message,
        username: this.username,
        room: this.room,
        created_at: Timestamp.fromDate(now)
      };
      // save the chat document
      const response = await addDoc(this.chats,chat);
      return response;
    }
  }
  
  const chatroom = new Chatroom('gaming', 'shaun');
  
  chatroom.addChat('hello everyone')
    .then(() => console.log('chat added'))
    .catch(err => console.log(err));