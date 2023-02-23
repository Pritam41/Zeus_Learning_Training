
import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection,onSnapshot,getDocs,
    addDoc,deleteDoc,doc,
    query,where,
    orderBy,serverTimestamp,
    getDoc
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

  //queries
  const q=query(colRef,orderBy('created_at','asc'))

  //get collection data
//   getDocs(colRef).then((snapshot) =>{
//     let books =[]
//     snapshot.docs.forEach((doc) => {
//         books.push({...doc.data(),id:doc.id})
//     })
//     console.log(books)
//   })
//   .catch(err =>{
//     console.lof(err.message)
//   })
  //realtime collection data

  //onSnapshot(colRef,(snapshot))

  onSnapshot(q,(snapshot)=>{
    let books =[]
        snapshot.docs.forEach((doc) => {
            books.push({...doc.data(),id:doc.id})
        })
        console.log(books)
  })

  //adding documnents
  const addBookForm = document.querySelector('.add')
  addBookForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    addDoc(colRef,{
        title: addBookForm.title.value,
        author:addBookForm.author.value,
        created_at:serverTimestamp()

    })
    .then(() =>{
        addBookForm.reset()  })
  })

  //deleting doc
  const deleteBookForm = document.querySelector('.delete')
  deleteBookForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const docRef=doc(db,'books',deleteBookForm.id.value)
    deleteDoc(docRef).then(()=>{
        deleteBookForm.reset()
    })
  })
  //get a single doc
  const docRef = doc(db,'books','RjLeFejxEpKvloxo6NIF')

//   getDoc(docRef).then((doc) =>{
//     console.log(doc.data(),doc.id)
//   })

onSnapshot(docRef,(doc)=>{
    console.log(doc.data(),doc.id)
})
