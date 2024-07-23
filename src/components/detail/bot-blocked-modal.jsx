import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

const ITEMS = [
  "Harassment",
  "Suicide or self-injury",
  "Pretending to be someone",
  "Sharing inappropriate things",
  "Hate speech",
  "Unauthorized sales",
  "Scams",
  "Other",
];

const BotBlockedModal = () => {
  const handleReport = () => {
    toast.success("Reported");
  };
  return (
    <div className="flex-1">
      <Dialog>
        <DialogTrigger className="w-full">
          <Button variant="ghost" className="w-full">
            Something&apos;s wrong
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report</DialogTitle>
            <DialogDescription>
              Let us know what&apos;s going on
            </DialogDescription>
            <DialogDescription>
              We use your feedback to help us learn when something&apos;s not
              right.
            </DialogDescription>
          </DialogHeader>
          {ITEMS.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={item} />
              <Label htmlFor={item} className="cursor-pointer">
                {item}
              </Label>
            </div>
          ))}
          <DialogFooter>
            <DialogClose className="flex space-x-3">
              <Button variant="secondary">Cancel</Button>
              <Button onClick={handleReport}>Report</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BotBlockedModal;
