import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdVKTdd4uNkz4065pbkPo3SYlM2QbWui4",
    authDomain: "olx-clone-8205a.firebaseapp.com",
    projectId: "olx-clone-8205a",
    storageBucket: "olx-clone-8205a.appspot.com",
    messagingSenderId: "375224670623",
    appId: "1:375224670623:web:4d4d2f149c042d3816c5aa"
  };


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
