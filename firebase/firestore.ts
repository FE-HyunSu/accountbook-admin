import { database } from "./firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseClientAuth } from "./firebaseConfig";

const getData = async (collectionName: string) => {
  return await getDocs(collection(database, collectionName));
};

const setData = async (collectionName: string, data: object) => {
  return await addDoc(collection(database, collectionName), data);
};

const loginAuth = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(firebaseClientAuth, email, password);
};

export { getData, setData, loginAuth };
