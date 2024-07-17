import { CircleCheck, TriangleAlert } from "lucide-react";

const FormState = ({ isSuccess, message }) => {
  if (!isSuccess && message === "") return null;
  return (
    <div
      className={
        isSuccess
          ? "bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500"
          : "bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive"
      }
    >
      {isSuccess ? (
        <CircleCheck className="w-4 h-4" />
      ) : (
        <TriangleAlert className="h-4 w-4" />
      )}
      <p>{message}</p>
    </div>
  );
};

export default FormState;
