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
    user_name = localStorage.getItem("Username");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("roomname" , room_name);
          window.location = "chatpage.html";
    }

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}