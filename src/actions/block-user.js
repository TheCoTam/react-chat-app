import { db } from "@/lib/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export const blockUser = async (
  currentUserId,
  receiverId,
  isReceiverBlocked
) => {
  const userDocRef = doc(db, "users", currentUserId);

  try {
    await updateDoc(userDocRef, {
      blocked: isReceiverBlocked
        ? arrayRemove(receiverId)
        : arrayUnion(receiverId),
    });
    return { success: "User blocked" };
  } catch (error) {
    console.log("block user", error);
    return { error: "Something went wrong" };
  }
};
