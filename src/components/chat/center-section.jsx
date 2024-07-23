// import { useEffect, useRef } from "react";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

import { useChatStore } from "@/hooks/useChatStore";
import { useUserStore } from "@/hooks/useUserStore";
import { getUserById } from "@/actions/get-user";
import Message from "./message";
import toast from "react-hot-toast";

const CenterSection = () => {
  const [chat, setChat] = useState();
  const { chatId } = useChatStore();
  const { currentUser } = useUserStore();
  // const endRef = useRef(null);

  // useEffect(() => {
  //   endRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, []);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), async (res) => {
      const data = res.data();
      const tmp = data.messages.map(async (item) => {
        if (item.senderId === currentUser.id) {
          return {
            ...item,
            own: true,
          };
        }

        const user = await getUserById(item.senderId);
        if ("error" in user) {
          toast.error(user.error);
          return;
        }
        return {
          ...item,
          own: false,
          user,
        };
      });
      const messages = await Promise.all(tmp);
      setChat(messages);
    });

    return () => {
      unSub();
    };
  }, [chatId, currentUser.id]);
  return (
    <div className="flex-1 p-3 overflow-auto flex flex-col gap-5">
      {chat?.map((message, index) => (
        <Message
          key={index}
          avt={message?.user?.img}
          img={message.img}
          content={message.text}
          own={message.own}
          createdAt={message.createdAt}
        />
      ))}
      {/* <div ref={endRef}></div> */}
    </div>
  );
};

export default CenterSection;
