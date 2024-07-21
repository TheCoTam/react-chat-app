import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const searchUsers = async (name) => {
  try {
    const userRef = collection(db, "users");
    const q = query(userRef, where("name", "==", name));
    // TODO: loại bỏ những người đã nhắn tin rồi hoặc với những người đã nhắn tin rồi thì bỏ qua ko thêm nữa
    // TODO: loại bỏ bản thân người tìm kiếm
    const querySnapShot = await getDocs(q);
    if (querySnapShot.empty) return { error: "No user found" };

    const res = querySnapShot.docs.map((doc) => {
      return doc.data();
    });

    return res;
  } catch (error) {
    console.log("Search user", error);
    return { error: "Something went wrong!" };
  }
};
