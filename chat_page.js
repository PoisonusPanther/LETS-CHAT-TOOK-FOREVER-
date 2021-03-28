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

  room_name = localStorage.getItem("Room");
  username = localStorage.getItem("username");
  function send(){
    msg = document.getElementById("send").value;
    console.log(msg);
    firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
          });
                
          
          }
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        username = message_data['name'];
                        msg = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>" + username + "<img id='user_tick' src='tick.png'></h4>";
                        message = "<p>" + msg + "</p>";
                        likes = "<button class='btn btn-warning glyphicon glyphicon-thumbs-up' onclick='likess(this.id)' id='" + firebase_message_id + "'>Like</button><p id='liking'>'" + like + "'</p><br><br>"
                        row = name_with_tag + message + likes;
                        document.getElementById("output").innerHTML += row;
          //End code
                } 
          });  
          }); 
          }
          getData();
          function logout(){
                localStorage.removeItem("Username");
                localStorage.removeItem("Room");
                window.location = "login.html";
              }
          function likess(like_count){
          console.log(like);
          like_count = like + 1;
          document.getElementById("liking").value = like_count;
          firebase.database().ref(room_name).child(firebase_message_id).update({
                like:like_count
          });
          }
