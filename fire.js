import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDr5Oe6nHSyCXDAc8NzPmdlaBT7l3UQ8tI",
    authDomain: "snake-game-426final.firebaseapp.com",
    projectId: "snake-game-426final",
    storageBucket: "snake-game-426final.appspot.com",
    messagingSenderId: "555572748880",
    appId: "1:555572748880:web:c98715946ecd84fd5ce755"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;