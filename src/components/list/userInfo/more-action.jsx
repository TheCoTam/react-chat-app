import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/firebase";
import {
  Ellipsis,
  Settings,
  Bell,
  Activity,
  Moon,
  Languages,
  Shield,
  LogOut,
  Flag,
  BadgeHelp,
  Scale,
} from "lucide-react";

const PREFERENCES = [
  {
    title: "General",
    icon: Settings,
  },
  {
    title: "Active status",
    icon: Activity,
  },
  {
    title: "Notifications",
    icon: Bell,
  },
  {
    title: "Appearance",
    icon: Moon,
  },
  {
    title: "Language",
    icon: Languages,
  },
  {
    title: "Privacy & safety",
    icon: Shield,
  },
];

const ACCOUNTSUPPORT = [
  {
    title: "Log out",
    icon: LogOut,
    onClick: () => auth.signOut(),
  },
  {
    title: "Account Settings",
    icon: Settings,
  },
  {
    title: "Report a problem",
    icon: Flag,
  },
  {
    title: "Help",
    icon: BadgeHelp,
  },
  {
    title: "Legal & policies",
    icon: Scale,
  },
];

const MoreAction = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Preferences</DropdownMenuLabel>
        {PREFERENCES.map((preference, index) => {
          const Icon = preference.icon;
          return (
            <DropdownMenuItem key={index} className="space-x-2 cursor-pointer">
              <Icon className="w-4 h-4" />
              <span>{preference.title}</span>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuLabel>Calls</DropdownMenuLabel>
        <DropdownMenuLabel>Account & Support</DropdownMenuLabel>
        {ACCOUNTSUPPORT.map((item, index) => {
          const Icon = item.icon;
          return (
            <DropdownMenuItem
              key={index}
              className="space-x-2 cursor-pointer"
              onClick={item?.onClick}
            >
              <Icon className="w-4 h-4" />
              <span>{item.title}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreAction;
