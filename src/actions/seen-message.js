import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const seenMessage = async (currentUserId, chatId) => {
  try {
    const userChatsRef = doc(db, "userChats", currentUserId);
    const userChatsSnapshot = await getDoc(userChatsRef);

    if (userChatsSnapshot.exists()) {
      const userChatsData = userChatsSnapshot.data();

      const chatIndex = userChatsData.chats.findIndex(
        (c) => c.chatId === chatId
      );
      userChatsData.chats[chatIndex].isSeen = true;
      await updateDoc(userChatsRef, {
        chats: userChatsData.chats,
      });
    }
  } catch (error) {
    console.error("seen-message", error);
    return { error: "Something went wrong" };
  }
};
