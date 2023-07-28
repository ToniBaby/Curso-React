import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP9B9yV4UMITQl-ZBilnlDtl7X-tGXP3Y",
  authDomain: "proyecto-coder-react-mainini.firebaseapp.com",
  projectId: "proyecto-coder-react-mainini",
  storageBucket: "proyecto-coder-react-mainini.appspot.com",
  messagingSenderId: "6349422368",
  appId: "1:6349422368:web:c3b61ea96ef6546b5aa145",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
