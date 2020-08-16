import firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyDngEDe-spfFG7ikuYDNzvb-fkIhQg4VsI',
  authDomain: 'schoolapp-2370a.firebaseapp.com',
  databaseURL: 'https://schoolapp-2370a.firebaseio.com',
  projectId: 'schoolapp-2370a',
  storageBucket: 'schoolapp-2370a.appspot.com',
  messagingSenderId: '999804636103',
  appId: '1:999804636103:web:527895e3f48c47bed767e2',
  measurementId: 'G-2XM7KWV40F',
};
const fb = firebase.initializeApp(config);
// export const db = Firebase.database();
export default fb;
