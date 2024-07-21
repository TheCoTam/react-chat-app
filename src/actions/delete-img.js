import { storage } from "@/lib/firebase";
import { deleteObject, ref } from "firebase/storage";

export const deleteImg = async (imgUrl) => {
  try {
    const baseUrl = "https://firebasestorage.googleapis.com/v0/b/";
    const startIndex = imgUrl.indexOf(baseUrl) + baseUrl.length;
    const endIndex = imgUrl.indexOf("?");
    const fullPath = imgUrl.substring(startIndex, endIndex);

    const pathStartIndex = fullPath.indexOf("/o/") + 3;
    const filePath = fullPath.substring(pathStartIndex);

    const fileRef = ref(storage, decodeURIComponent(filePath));

    if (!fileRef) return;

    await deleteObject(fileRef);
  } catch (error) {
    console.log("delete img", error);
    return { error: "Something went wrong!" };
  }
};
