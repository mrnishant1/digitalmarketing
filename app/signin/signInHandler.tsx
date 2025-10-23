import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { auth } from "./firebaseconfig";

//signIn handler
export async function signinhandler() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

    } catch (error) {
      console.error("Login failed:", error);
    }
  }

export async function signouthandler() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout failed", error)
    }
}