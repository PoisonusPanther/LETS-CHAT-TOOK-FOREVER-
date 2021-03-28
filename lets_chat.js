function addUser(){
username = document.getElementById("username").value;
localStorage.setItem("username",username);

window.location = "chat_room.html";
}

