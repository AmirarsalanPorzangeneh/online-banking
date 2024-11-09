  // import React from "react";
  // import "./input.css";

  // export default function Input(props) {
  //   const {
  //     type,
  //     placeholder,
  //     inputName,
  //     icon: Icon,
  //     dir,
  //     className,
  //     onClick,
  //     onChange,
  //     id,
  //   } = props;

  //   return (
  //     <div className="mb-3">
  //       <h5 className="text-white text-sm">{inputName}</h5>
  //       <div className="flex items-center relative">
  //         {Icon && (
  //           <div
  //             className="absolute left-3 text-gray-400 hover:text-white transition-all delay-75"
  //             onClick={onClick}
  //           >
  //             <Icon />
  //           </div>
  //         )}
  //         <input
  //           style={{
  //             background: "#374151",
  //           }}
  //           className={`${className} my-2 py-2 px-3 w-full rounded-md text-gray-300 border-spacing-1 border-gray-600 outline-none border-[1px]`}
  //           type={type}
  //           placeholder={placeholder}
  //           dir={dir}
  //           id={id}
  //           onChange={onChange}
  //         />
  //       </div>
  //     </div>
  //   );
  // }




  import React from "react";
  import "./input.css";

  export default function Input(props) {
    const {
      type,
      placeholder,
      inputName,
      icon: Icon,
      dir,
      className,
      onClick,
      onChange,
      id,
      register
    } = props;

    return (
      <div className="mb-3">
        <h5 className="text-white text-sm">{inputName}</h5>
        <div className="flex items-center relative">
          {Icon && (
            <div
              className="absolute left-3 text-gray-400 hover:text-white transition-all delay-75"
              onClick={onClick}
              
            >
              <Icon />
            </div>
          )}
          <input
            style={{
              background: "#374151",
            }}
            className={`${className} my-2 py-2 px-3 w-full rounded-md text-gray-300 border-spacing-1 border-gray-600 outline-none border-[1px]`}
            type={type}
            placeholder={placeholder}
            dir={dir}
            id={id}
            onChange={onChange}
            {...register}
          />
        </div>
      </div>
    );
  }




