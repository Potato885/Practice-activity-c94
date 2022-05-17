
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
    apiKey: "AIzaSyDIDeSEsw4u6bEt9SRjWeOFjpJbP7_YbRM",
    authDomain: "kwitter-14b32.firebaseapp.com",
    databaseURL: "https://kwitter-14b32-default-rtdb.firebaseio.com",
    projectId: "kwitter-14b32",
    storageBucket: "kwitter-14b32.appspot.com",
    messagingSenderId: "1093812192555",
    appId: "1:1093812192555:web:24f706b11fc9902eb7716e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

}
