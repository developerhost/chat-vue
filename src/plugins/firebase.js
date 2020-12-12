import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  // ここにfirebaseのapi情報をコピペします。
  apiKey: "AIzaSyCLnEwS0mEl9NHSjVFL9RafLCu_FLwzIxA",
  authDomain: "chat-vue-82404.firebaseapp.com",
  databaseURL: "https://chat-vue-82404-default-rtdb.firebaseio.com",
  projectId: "chat-vue-82404",
  storageBucket: "chat-vue-82404.appspot.com",
  messagingSenderId: "749675380148",
  appId: "1:749675380148:web:c2ec7f9f9451192ff706e1"
});

export const db = firebaseApp.firestore();

