import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  // Note: needs to be used within a form component
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group self-center mt-2 flex items-center justify-center gap-3 h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all cursor-pointer focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white/10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
