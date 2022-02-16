function addUser(){
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user name is",user_name);
    window.location="kwitter_room.html";
}