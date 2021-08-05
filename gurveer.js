var firebaseConfig = {
    apiKey: "AIzaSyCqoYPBS3xBY-Wzth7bUTkdqdisdUcbWHM",
    authDomain: "class-test-cae88.firebaseapp.com",
    projectId: "class-test-cae88",
    storageBucket: "class-test-cae88.appspot.com",
    messagingSenderId: "91711557936",
    appId: "1:91711557936:web:516faea1392b44c29738f5",
    measurementId: "G-J82QBHP43E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }

 