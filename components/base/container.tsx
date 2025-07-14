import React from "react";

export function GlobalContainer({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1200px] mx-auto  ">{children}</div>;
}
