import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { File, Files } from "lucide-react";

const FileAction = () => {
  const files = [
    {
      name: "file name is quite long and long",
      createdAt: new Date(),
      size: "1.2MB",
    },
    {
      name: "file name is short",
      createdAt: new Date(),
      size: "1.2MB",
    },
  ];
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex space-x-2 items-center">
            <Files />
            <span>Shared Files</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col px-1 space-y-2">
            {files.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-1 hover:bg-slate-600 rounded-xl cursor-pointer"
                >
                  <File className="w-[18px] h-[18px] shrink-0" />
                  <div className="flex flex-col w-[80%]">
                    <span className="w-[85%] break-words truncate">
                      {item.name}
                    </span>
                    <div className="flex text-[10px] items-center justify-between">
                      <span>{item.createdAt.toDateString()}</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FileAction;
