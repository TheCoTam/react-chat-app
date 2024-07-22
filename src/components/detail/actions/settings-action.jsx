import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Settings, Pin, Palette, Annoyed, CaseSensitive } from "lucide-react";

const SETTING_ITEMS = [
  {
    title: "View pinned messages",
    icon: Pin,
  },
  {
    title: "Change theme",
    icon: Palette,
  },
  {
    title: "Change emoji",
    icon: Annoyed,
  },
  {
    title: "Edit nicknames",
    icon: CaseSensitive,
  },
];
const SettingsAction = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex space-x-2 items-center">
            <Settings />
            <span>Chat Settings</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col px-1 space-y-2">
            {SETTING_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 hover:bg-slate-600 px-1 py-2 rounded-xl cursor-pointer"
                >
                  <Icon className="w-[18px] h-[18px]" />
                  <label>{item.title}</label>
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SettingsAction;
