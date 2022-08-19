import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

//solo para update de productos
import { arrayProducts } from '../assets/data/products';
import { uploadCollectionItems } from "../helpers/firestore.controller";

const firebaseConfig = {
  apiKey: "AIzaSyDqaKsz6PP9mXMqWClca9PsoNUUQcm_6nU",
  authDomain: "bakery-app-tutoria.firebaseapp.com",
  projectId: "bakery-app-tutoria",
  storageBucket: "bakery-app-tutoria.appspot.com",
  messagingSenderId: "587122117998",
  appId: "1:587122117998:web:bd17b949cac2b929f9057f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


//Correr por única vez cuando aún no he subido los productos a mi colección.
if(false){
  setTimeout(() =>{
    uploadCollectionItems(arrayProducts, 'products');
  },4000)
}
