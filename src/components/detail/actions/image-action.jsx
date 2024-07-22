import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Images } from "lucide-react";

const ImageAction = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b3JtfGVufDB8fDB8fHww",
    },
    {
      src: "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN0b3JtfGVufDB8fDB8fHww",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHN0b3JtfGVufDB8fDB8fHww",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681488162344-542e0b7c3378?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHN0b3JtfGVufDB8fDB8fHww",
    },
  ];

  const handleClick = (src) => {
    window.open(src, "_blank");
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex space-x-2 items-center">
            <Images />
            <span>Shared Images/Videos</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-3 gap-3">
            {images.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item.src}
                    className="w-full h-[60px] object-cover cursor-pointer active:opacity-75 rounded-lg"
                    onClick={() => handleClick(item.src)}
                  />
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ImageAction;
