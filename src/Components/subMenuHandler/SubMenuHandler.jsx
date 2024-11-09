import React from "react";
import { useState } from "react";

export default function SubMenuHandler(props) {
  const { children, className } = props;
  return (
    <div
      className={`border-b-2 border-gray-600 transition-all duration-300 ease-in-out flex flex-col space-y-6 pr-4 [&>li:hover]:text-gray-400 [&>li:hover]:transition-all [&>li:hover]:delay-100 ${className}`}
    >
      {children}
    </div>
  );
}
