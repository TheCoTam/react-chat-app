import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const searchUsers = async (name, currentUserId) => {
  try {
    const userRef = collection(db, "users");
    const q = query(userRef, where("name", "==", name));

    const querySnapShot = await getDocs(q);
    if (querySnapShot.empty) return { error: "No user found" };

    const data = querySnapShot.docs.map((doc) => {
      return doc.data();
    });

    // remove current user from search
    const newData = data.filter((item) => item.id !== currentUserId);

    const userChatsRef = doc(db, "userChats", currentUserId);
    const userChatsSnapshot = await getDoc(userChatsRef);

    if (!userChatsSnapshot.exists()) {
      return { error: "User chats not found" };
    }
    const userChatsData = userChatsSnapshot
      .data()
      .chats.map((chat) => chat.receiverId);

    const res = newData.filter((item) => !userChatsData.includes(item.id));

    if (res.length === 0) return { error: "No user found" };

    return res;
  } catch (error) {
    console.log("Search user", error);
    return { error: "Something went wrong!" };
  }
};
