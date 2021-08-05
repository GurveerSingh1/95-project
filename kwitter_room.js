
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

  
  function getData() 

  {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
  
        console.log("Room Names - " + Room_names);
  
         row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
  
         document.getElementById("output").innerHTML += row;
  
       
        });});}
        
  getData();
  
  function addRoom()
  
  {
        room_name=document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
                                                                   
        localStorage.setItem("room_name" , room_name);
        
        window.location="kwitter_page.html";
  }
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location="kwitter_page.html";
  
  }