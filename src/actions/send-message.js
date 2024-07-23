import { db } from "@/lib/firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

export const sendMessage = async (
  chatId,
  currentUserId,
  userId,
  text,
  imgUrl
) => {
  try {
    await updateDoc(doc(db, "chats", chatId), {
      messages: arrayUnion({
        senderId: currentUserId,
        text,
        createdAt: new Date(),
        ...(imgUrl && { img: imgUrl }),
      }),
    });

    const userIds = [currentUserId, userId];
    userIds.forEach(async (id) => {
      const userChatRef = doc(db, "userChats", id);
      const userChatsSnapshot = await getDoc(userChatRef);
      if (userChatsSnapshot.exists()) {
        const userChatsData = userChatsSnapshot.data();

        const chatIndex = userChatsData.chats.findIndex(
          (c) => c.chatId === chatId
        );
        userChatsData.chats[chatIndex].lastMessage = text;
        userChatsData.chats[chatIndex].isSeen =
          id === currentUserId ? true : false;
        userChatsData.chats[chatIndex].updatedAt = Date.now();
        await updateDoc(userChatRef, {
          chats: userChatsData.chats,
        });
      }
    });
  } catch (error) {
    console.log("Send-Message", error);
    return { error: "Something went wrong" };
  }
};
