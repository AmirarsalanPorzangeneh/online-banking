import React from "react";
import { Link } from "react-router-dom";

export default function Buttons(props) {
  const { btnName, to, className } = props;
  return (
    <Link to={to}>
      <button
        className={`${className} text-white w-full my-2 py-2 px-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-all ease-in-out delay-200`}
      >
        {btnName}
      </button>
    </Link>
  );
}
