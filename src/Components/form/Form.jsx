import React from "react";

export default function Form(props) {
  const { Header, FormTitle, children, onSubmit, className, icon, onClose } =
    props;

  return (
    <div className={`${className} flex justify-center items-center h-screen`}>
      <div className="w-96 ">
        <h2 className="text-white text-center mb-8 text-2xl font-bold">
          {Header}
        </h2>

        <form
          style={{ background: "#1F2A37" }}
          className="px-5 py-6 rounded-lg relative"
          onSubmit={onSubmit}
        >
          <h3 className="text-white mb-6 font-semibold">{FormTitle}</h3>

          {icon && (
            <div
              className="absolute top-6 left-4 text-white cursor-pointer hover:text-gray-300 transition"
              onClick={onClose}
            >
              {icon}
            </div>
          )}

          {children}
        </form>
      </div>
    </div>
  );
}
