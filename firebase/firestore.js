import { database } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseClientAuth } from '../firebase/firebaseConfig';

const getData = async (collectionName) => {
  return await getDocs(collection(database, collectionName));
};

const setData = async (collectionName, data) => {
  return await addDoc(collection(database, collectionName), data);
};

const login = async (email, password) => {
  await signInWithEmailAndPassword(firebaseClientAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ' / ' + errorMessage);
      if (errorCode.includes('email')) {
        alert('등록되지 않은 이메일 입니다.');
      } else if (errorCode.includes('internal-error')) {
        alert('패스워드가 틀렸습니다.');
      } else {
        alert('잘못된 정보 입니다.');
      }
    });
};

export { getData, setData, login };
