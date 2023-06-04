
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBgQ_JgM62d4omO96YVRHRKv5nJsWcXYu8",
      authDomain: "classtest-b7cc2.firebaseapp.com",
      projectId: "classtest-b7cc2",
      storageBucket: "classtest-b7cc2.appspot.com",
      messagingSenderId: "915153025337",
      appId: "1:915153025337:web:196c48ed2259a3fab7d0e8",
      measurementId: "G-7KFWXKF46H"
    };
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
