import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (values) => {
  const { email, password } = values;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: "Signed in" };
  } catch (error) {
    console.log("Sign In", error);
    return { error: "Something went wrong" };
  }
};
