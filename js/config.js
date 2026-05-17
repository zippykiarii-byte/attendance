const firebaseConfig = {
  apiKey: "AIzaSyCMsOOWHfbZfvreV-ZHGBQSK8b69fhvHaY",
  authDomain: "attendance-2b628.firebaseapp.com",
  databaseURL: "https://attendance-2b628-default-rtdb.firebaseio.com",
  projectId: "attendance-2b628",
  storageBucket: "attendance-2b628.firebasestorage.app",
  messagingSenderId: "967859985762",
  appId: "1:967859985762:web:db8d5272b8cb1779f1203b",
  measurementId: "G-B8XK2MMRK9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
console.log('connected to firebase')

function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.href = "index.html";
  }).catch((error) => {
    // An error happened.
   alert("Error while signing out")
  })
}