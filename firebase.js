import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWrS-T01YjNpWWGhFc9fsRNoMEG9gACsc",
  authDomain: "uber-next-clone-bfe76.firebaseapp.com",
  projectId: "uber-next-clone-bfe76",
  storageBucket: "uber-next-clone-bfe76.appspot.com",
  messagingSenderId: "37068550050",
  appId: "1:37068550050:web:711ebc9450e7dfb54a0cfb",
  measurementId: "G-N9QC7C5GWT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { auth, provider, app };
