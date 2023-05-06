var firebaseConfig = {
      apiKey: "AIzaSyBvWIzeHUqQ5NSNeg1U9HD-Ez0ITqSL9DI",
      authDomain: "kwitter-1c8c1.firebaseapp.com",
      databaseURL: "https://kwitter-1c8c1-default-rtdb.firebaseio.com",
      projectId: "kwitter-1c8c1",
      storageBucket: "kwitter-1c8c1.appspot.com",
      messagingSenderId: "384143167704",
      appId: "1:384143167704:web:38991d26ce034e099c87ad"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name..."
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=  " +Room_names+" onclick ='redirectToRoomName(name)' >#" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML +=row;
//End code
      });});}
getData(); 
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", room);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
