import { db } from "@/lib/firebase";
import {
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const addUser = async (id, currentUserId) => {
  const chatRef = collection(db, "chats");
  const userChatsRef = collection(db, "userChats");
  try {
    const newChatRef = doc(chatRef);

    await setDoc(newChatRef, {
      createdAt: serverTimestamp(),
      messages: [],
    });

    await updateDoc(doc(userChatsRef, currentUserId), {
      chats: arrayUnion({
        chatId: newChatRef.id,
        lastMessage: "",
        receiverId: id,
        updatedAt: Date.now(),
      }),
    });

    await updateDoc(doc(userChatsRef, id), {
      chats: arrayUnion({
        chatId: newChatRef.id,
        lastMessage: "",
        receiverId: currentUserId,
        updatedAt: Date.now(),
      }),
    });
  } catch (error) {
    console.log("Add user", error);
    return { error: "Something went wrong!" };
  }
};
