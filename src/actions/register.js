import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export const register = async (values) => {
  const { email, password, confirmPassword, name } = values;
  if (password !== confirmPassword) {
    return { error: "Password does not match" };
  }

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", res.user.uid), {
      id: res.user.uid,
      name,
      email,
      img: "./avatar.png",
      blocked: [],
    });

    await setDoc(doc(db, "userChats", res.user.uid), {
      chats: [],
    });
    return { success: "Account created" };
  } catch (error) {
    console.log("Register", error);
    return { error: "Something went wrong" };
  }
};
