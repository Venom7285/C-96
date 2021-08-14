//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyD55lvZTUk6X_rWVOB-Ih-VwwaVRcE7qIc",
    authDomain: "kwitter-c31d7.firebaseapp.com",
    databaseURL: "https://kwitter-c31d7-default-rtdb.firebaseio.com",
    projectId: "kwitter-c31d7",
    storageBucket: "kwitter-c31d7.appspot.com",
    messagingSenderId: "291182436668",
    appId: "1:291182436668:web:b8c0048fdce9b7646cbe39",
    measurementId: "G-FNM6S8SZV1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("roomname");

  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
        });

        document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
nameOne = message_data['name'];
message = message_data['message'];
name_with_tag = "<h4>" + nameOne + "<img class = 'user_tick' src = 'tick.png'> </h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>" + "<hr id = 'msg_br'>";

row = name_with_tag + message_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("roomname");

    window.location = "index.html";
}