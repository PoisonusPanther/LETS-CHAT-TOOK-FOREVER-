var firebaseConfig = {
  apiKey: "AIzaSyB1twkP3AVgBkmDDyd4eMdUUFUAv4b4TlI",
  authDomain: "kwitter2-63b7f.firebaseapp.com",
  databaseURL: "https://kwitter2-63b7f-default-rtdb.firebaseio.com",
  projectId: "kwitter2-63b7f",
  storageBucket: "kwitter2-63b7f.appspot.com",
  messagingSenderId: "820964872050",
  appId: "1:820964872050:web:0ec884f8d6c6157a8f97eb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "Welcome " + username;

function add_room() {
  room = document.getElementById("room_name").value;
  localStorage.setItem("Room", room);
  firebase.database().ref("/").child(room).update({
    purpose: "adding room name"
  });
  window.location = "chat_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();
function redirectToRoom(room) {
  window.location = "chat_page.html";
  localStorage.setItem("Room", room);
}
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Room");
  window.location = "login.html";
}


