import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvjUQj7J0cYlOooQeE9iAcR4x8F0WJtys",
  authDomain: "netflix-clone-2413d.firebaseapp.com",
  projectId: "netflix-clone-2413d",
  storageBucket: "netflix-clone-2413d.appspot.com",
  messagingSenderId: "4822568011",
  appId: "1:4822568011:web:36ced8fb6ec898f63111ce"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()
provider.setCustomParameters({
  prompt: "select_account"
})
export const SignInWithGooglePopup = async () => {
  try {
    const response = await signInWithPopup(auth, provider)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}