
import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection,getDocs
}from 'firebase/firestore'
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
  const db = getFirestore()
  //collection ref
  const colRef = collection(db,'books')
  //get collection data
  getDocs(colRef).then((snapshot) =>{
    let books =[]
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(),id:doc.id})
    })
    console.log(books)
  })
  .catch(err =>{
    console.lof(err.message)
  })
