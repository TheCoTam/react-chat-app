import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Cookie,
  BellOff,
  MessageCircleDashed,
  KeyRound,
  PencilOff,
  TriangleAlert,
} from "lucide-react";

const PRIVACY_SUPPORT_ITEMS = [
  {
    title: "Mute notifications",
    icon: BellOff,
  },
  {
    title: "Disappearing messages",
    icon: MessageCircleDashed,
  },
  {
    title: "Verify end-to-end encryption",
    icon: KeyRound,
  },
  {
    title: "Restrict",
    icon: PencilOff,
  },
  {
    title: "Report",
    icon: TriangleAlert,
  },
];

const PrivacySupportAction = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex space-x-2 items-center">
            <Cookie />
            <span>Privacy & Support</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col px-1 space-y-2">
            {PRIVACY_SUPPORT_ITEMS.map((item, index) => {
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

export default PrivacySupportAction;
