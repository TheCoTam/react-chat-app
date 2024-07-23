import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getFirstChatIdByUserId = async (currentUserId) => {
  try {
    const userChatsRef = doc(db, "userChats", currentUserId);
    const userChatsSnapshot = await getDoc(userChatsRef);

    if (!userChatsSnapshot.exists()) {
      console.log("user chats snapshot does not exist");
      return null;
    }

    const userChatsData = userChatsSnapshot.data();
    const chatId = userChatsData.chats[0].chatId;
    const userId = userChatsData.chats[0].receiverId;
    return { chatId, userId };
  } catch (error) {
    console.log("get first chat id by user id", error);
    return null;
  }
};
