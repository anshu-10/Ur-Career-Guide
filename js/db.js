// Firebase CDN-based initialization

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD1_QvVQODpIRnEtSgRVbZpoYvZJQ07X8E",
  authDomain: "ur-career-guide.firebaseapp.com",
  projectId: "ur-career-guide",
  storageBucket: "ur-career-guide.appspot.com",
  messagingSenderId: "1055310496144",
  appId: "1:1055310496144:web:c7646378d767d110273315"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();