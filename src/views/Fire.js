import firebase from "firebase"

const config = {
    apiKey: "AIzaSyCRP49AF5B5b9tN-drhwAXm-89J2DQ7aiA",
    authDomain: "dashx-portfolio.firebaseapp.com",
    databaseURL: "https://dashx-portfolio-default-rtdb.firebaseio.com",
    projectId: "dashx-portfolio",
    storageBucket: "dashx-portfolio.appspot.com",
    messagingSenderId: "985320801304",
    appId: "1:985320801304:web:4dc6cebbecbde3f7fc2f6d"
  };

  const fire = firebase.initializeApp(config); 

  export default fire; 