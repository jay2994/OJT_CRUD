
var app_fireBase ={} 

(function(){

   
//<script src="https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js"></script>


//<script src="https://www.gstatic.com/firebasejs/7.8.2/firebase-analytics.js"></script>


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDZ2SE3lqorToLBUk6Wt-VHtzUKfukgUwE",
    authDomain: "crud-96bbd.firebaseapp.com",
    databaseURL: "https://crud-96bbd.firebaseio.com",
    projectId: "crud-96bbd",
    storageBucket: "crud-96bbd.appspot.com",
    messagingSenderId: "340523581746",
    appId: "1:340523581746:web:ddf5e0fd0ddc8a20a3972b",
    measurementId: "G-BXJHLJDQQC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  app_fireBase = firebase;
})()