import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-slate-600">
      <small className="mb-2 block text-xs font-medium">
        &copy; {new Date().getFullYear()} Eli Intriligator. All rights reserved.{" "}
      </small>
      <p className="text-xs">
        Developed with React, Next.js (App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend.
      </p>
    </footer>
  );
}
