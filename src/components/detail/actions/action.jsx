import BlockButton from "../block-button";
import LogOutButton from "../Logout-button";
import FileAction from "./file-action";
import ImageAction from "./image-action";
import PrivacySupportAction from "./privacy-support-action";
import SettingsAction from "./settings-action";

const Action = () => {
  return (
    <div className="flex flex-col p-5 gap-[10px] overflow-y-scroll">
      <SettingsAction />
      <PrivacySupportAction />
      <FileAction />
      <ImageAction />
      <div className="flex flex-col gap-3">
        <BlockButton />
        <LogOutButton />
      </div>
    </div>
  );
};

export default Action;
