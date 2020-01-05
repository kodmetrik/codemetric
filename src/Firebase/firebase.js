import  app from 'firebase/app';
import firebase from 'firebase'
require('@firebase/auth');
require('@firebase/database')

var firebaseConfig = {
  apiKey: "AIzaSyBcICCXdXBYLPVg7SZBtjrFH2LpEZEGEsw",
  authDomain: "kodmetrik.firebaseapp.com",
  databaseURL: "https://kodmetrik.firebaseio.com",
  projectId: "kodmetrik",
  storageBucket: "kodmetrik.appspot.com",
  messagingSenderId: "440278593155",
  appId: "1:440278593155:web:b48c83b6543e819e15b5b6",
  measurementId: "G-CTVRLSVRGW"
};

class Firebase{
  constructor(){
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db= firebase.firestore()
  }
  addCustomers(list){
    debugger
    list.forEach((customer) => {
      this.db.collection("customers").add(customer)
    })
  }
  async getCustomers(){
    try {
      const snapshot = await firebase.firestore().collection('customers').get()
      return snapshot.docs.map(doc => doc.data());
    } catch (error) {
      
    }
    
  }
  login=(email,password) => {
    return this.auth.signInWithEmailAndPassword(email,password)
  }
  signOut= () => {
    this.auth.signOut()
  }
}
export default Firebase