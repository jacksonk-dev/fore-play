import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBrJrpUlPNd37IpyOEBaItg4JMpdHS5F1w',
  authDomain: 'fore-play.firebaseapp.com',
  projectId: 'fore-play',
  storageBucket: 'fore-play.appspot.com',
  messagingSenderId: '566521447363',
  appId: '1:566521447363:web:e4ace452fe8f91e547b376',
};

const app = initializeApp(firebaseConfig);

export default app;
