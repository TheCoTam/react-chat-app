import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getUserById = async (id) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("id", "==", id));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return { error: "No user found" };
    const user = querySnapshot.docs[0].data();
    return user;
  } catch (error) {
    console.log("get user", error);
    return { error: "Something went wrong!" };
  }
};
