import React from "react";

export default function HeaderIcons(props) {
  const { icon, onClick, className } = props;
  return (
    <>
      <span
        className={` ${className} text-gray-300 hover:text-white transition-all hover:delay-100 `}
        onClick={onClick}
      >
        {icon}
      </span>
    </>
  );
}
