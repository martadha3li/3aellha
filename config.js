// config.js - Ver: 206-16
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCt6XkYWcA6W0IlBjJp2T-QwNnz_-N4LqE",
  authDomain: "vertical-reason-572.firebaseapp.com",
  databaseURL: "https://vertical-reason-572.firebaseio.com",
  projectId: "vertical-reason-572",
  storageBucket: "vertical-reason-572.firebasestorage.app",
  messagingSenderId: "580690748055",
  appId: "1:580690748055:web:31ecd085296e6dd8d7ffd2",
  measurementId: "G-JR4B6B0MNB"
};

const app = initializeApp(firebaseConfig);
// تهيئة دقيقة تتوافق تلقائياً مع وضع Datastore المستضاف
export const db = getFirestore(app);
