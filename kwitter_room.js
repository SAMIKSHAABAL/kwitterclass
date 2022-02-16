
  var firebaseConfig = {
      apiKey: "AIzaSyBrQl10_fYBgG4bHbPV1TDq8LPd1W4t3Pc",
      authDomain: "kwitter-8ecd8.firebaseapp.com",
      databaseURL: "https://kwitter-8ecd8-default-rtdb.firebaseio.com",
      projectId: "kwitter-8ecd8",
      storageBucket: "kwitter-8ecd8.appspot.com",
      messagingSenderId: "811548830793",
      appId: "1:811548830793:web:66d3854e433b3bf6aa6398",
      measurementId: "G-CLG1EG23M5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user name is");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}

getData();

function logout(){
localStorage.removeItem("user name is");
window.location="index.html";
}
function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            roomName:"room name"
      });
      localStorage.setItem("roomnameis",room_name);
      window.location="kwitter_page.html"
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}