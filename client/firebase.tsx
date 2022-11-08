import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAFLpmTF1G4KEzbankxJuEtlaFejmtjQ2c',
  authDomain: 'react-study-56c25.firebaseapp.com',
  projectId: 'react-study-56c25',
  storageBucket: 'react-study-56c25.appspot.com',
  messagingSenderId: '737294251353',
  appId: '1:737294251353:web:25617a2e94c6f3658bc848',
};

const firebaseClientApp = initializeApp(firebaseConfig);
export const firebaseClientAuth = getAuth(firebaseClientApp);
// connectAuthEmulator(firebaseClientAuth, 'http://localhost:3000');
