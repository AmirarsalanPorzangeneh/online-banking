
// import React from "react";

// export default function Form(props) {
//   const { Header, FormTitle, children, onSubmit } = props;
//   return (
//     <div>
//       {/* whole form */}
//       <div className="flex justify-center items-center h-screen">
//         {/* form-title */}
//         <div className="w-96">
//           <h2 className="text-white text-center mb-8 text-2xl font-bold">
//             {Header}
//           </h2>
//           {/* form-content */}
//           <form
//             style={{ background: "#1F2A37" }}
//             className="px-5 py-6 rounded-lg"
//             onSubmit={onSubmit} 
//           >
//             <h3 className="text-white mb-6 font-semibold">{FormTitle}</h3>
//             {children}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Form(props) {
  const { Header, FormTitle, children, onSubmit } = props;
  return (
    <div>
      {/* whole form */}
      <div className="flex justify-center items-center h-screen">
        {/* form-title */}
        <div className="w-96">
          <h2 className="text-white text-center mb-8 text-2xl font-bold">
            {Header}
          </h2>
          {/* form-content */}
          <form
            style={{ background: "#1F2A37" }}
            className="px-5 py-6 rounded-lg"
            onSubmit={onSubmit} 
          >
            <h3 className="text-white mb-6 font-semibold">{FormTitle}</h3>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
