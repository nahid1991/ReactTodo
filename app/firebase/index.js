import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCzXfinJkXd4XXBN0J9c193-mAgG-lm8oA",
    authDomain: "react-todo-945ec.firebaseapp.com",
    databaseURL: "https://react-todo-945ec.firebaseio.com",
    storageBucket: "react-todo-945ec.appspot.com",
    messagingSenderId: "731235494880"
  };
  firebase.initializeApp(config);
} catch(e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
