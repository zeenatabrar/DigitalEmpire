import 'firebase/auth'
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBFlcf6nnQwOQPe7TIjRBRA8HytJCnlelA",
    authDomain: "digital-empire-88625.firebaseapp.com",
    projectId: "digital-empire-88625",
    storageBucket: "digital-empire-88625.appspot.com",
    messagingSenderId: "1000724318461",
    appId: "1:1000724318461:web:471c81fda5702962bf1694"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app)
