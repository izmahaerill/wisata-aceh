import React from "react";

export default function HeadingSection({ children }) {
  return (
    <h1 className="text-2xl text-yellow-primary font-medium mb-8">
      {children}
    </h1>
  );
}
