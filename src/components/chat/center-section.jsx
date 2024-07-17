// import { useEffect, useRef } from "react";
import Message from "./message";

const CenterSection = () => {
  // const endRef = useRef(null);

  // useEffect(() => {
  //   endRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, []);

  return (
    <div className="flex-1 p-3 overflow-auto flex flex-col gap-5">
      <Message
        avt="./avatar.png"
        content="ajhsdkjahksjdhkjahskdjhakjsdhkjahsjkdhkahdkashk"
        own={true}
      />
      <Message
        avt="./avatar.png"
        content="ajhsdkjahksjdhkjahskdjhakjsdhkjahsjkdhkahdkashk"
        own={false}
      />
      <Message
        avt="./avatar.png"
        content="ajhsdkjahksjdhkjahskdjhakjsdhkjahsjkdhkahdkashk"
        own={true}
      />
      <Message
        avt="./avatar.png"
        content="ajhsdkjahksjdhkjahskdjhakjsdhkjahsjkdhkahdkashk"
        own={false}
      />
      <Message
        img="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        avt="./avatar.png"
        content="ajhsdkjahksjdhkjahskdjhakjsdhkjahsjkdhkahdkashk"
        own={true}
      />
      {/* <div ref={endRef}></div> */}
    </div>
  );
};

export default CenterSection;
