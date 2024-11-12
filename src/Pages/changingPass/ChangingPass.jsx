// import React, { useState } from "react";
// import Form from "../../Components/form/Form";
// import Input from "../../Components/input/Input";
// import { Button } from "antd";
// // import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// // import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// export default function ChangingPass() {
//   const [visibility, setVisibility] = useState(false);

//   const clickHandler = () => {
//     setVisibility(!visibility);
//   };

//   // Define the validation schema
//   const schema = yup.object().shape({
//     currentPassword: yup
//       .string()
//       .required("رمز الزامی است")
//       .min(8, "رمز حداقل باید 8 رقم باشد")
//       .matches(/[a-z]/, "رمز باید حداقل یک حرف کوچک داشته باشد")
//       .matches(/[A-Z]/, "رمز باید حداقل یک حرف بزرگ داشته باشد")
//       .matches(/\d/, "رمز باید حداقل یک عدد داشته باشد")
//       .matches(/[@$!%*?&]/, "رمز باید حداقل یه حرف مخصوص داشته باشد"),
//     newPassword: yup
//       .string()
//       .required("رمز الزامی است")
//       .min(8, "رمز حداقل باید 8 رقم باشد")
//       .matches(/[a-z]/, "رمز باید حداقل یک حرف کوچک داشته باشد")
//       .matches(/[A-Z]/, "رمز باید حداقل یک حرف بزرگ داشته باشد")
//       .matches(/\d/, "رمز باید حداقل یک عدد داشته باشد")
//       .matches(/[@$!%*?&]/, "رمز باید حداقل یه حرف مخصوص داشته باشد"),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("newPassword"), null], "رمز ها باید یکسان باشند")
//       .required("رمز را مجدد وارد کنید"),
//   });

//   // Initialize useForm with the schema
//   const {
//     register,
//     handleSubmit,
//     trigger,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     mode: "onChange",
//   });

//   const onSubmit = async (data) => {
//     const isValid = await trigger(); // Revalidate inputs before final submission
//     if (isValid) {
//       console.log(data);
//     }
//   };

//   return (
//     <>
//       <Form FormTitle={"تغییر رمز اولیه ثابت"}>
//         <Input
//           inputName={"رمز عبور فعلی"}
//           onClick={clickHandler}
//           icon={visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
//           type={visibility ? "text" : "password"}
//           {...register("currentPassword")}
//           dir="ltr"
//         />
//         <p style={{ color: "red", paddingBottom: "10px" }}>
//           {errors.currentPassword?.message}
//         </p>
//         <Input
//           inputName={"رمز عبور جدید"}
//           onClick={clickHandler}
//           icon={visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
//           type={visibility ? "text" : "password"}
//           {...register("newPassword")}
//           dir="ltr"
//         />
//         <p style={{ color: "red", paddingBottom: "10px" }}>
//           {errors.newPassword?.message}
//         </p>
//         <Input
//           inputName={"تکرار رمز عبور جدید"}
//           onClick={clickHandler}
//           icon={visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
//           type={visibility ? "text" : "password"}
//           {...register("confirmPassword")}
//           dir="ltr"
//         />
//         <p style={{ color: "red", paddingBottom: "10px" }}>
//           {errors.confirmPassword?.message}
//         </p>
//         <Button
//           block
//           type="primary"
//           className="py-5"
//           onClick={handleSubmit(onSubmit)}
//         >
//           تایید
//         </Button>
//       </Form>
//     </>
//   );
// }

import React, { useState } from "react";
import Form from "../../Components/form/Form";
import Input from "../../Components/input/Input";
import { Button } from "antd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ChangingPass() {
  // const [visibility, setVisibility] = useState(false);
  const [visibility, setVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // const clickHandler = () => {
  //   setVisibility(!visibility);
  // };

  const clickHandler = (inputName) => {
    setVisibility((prevState) => ({
      ...prevState,
      [inputName]: !prevState[inputName], // Toggle visibility for the clicked input
    }));
  };

  // Define the validation schema
  const schema = yup.object().shape({
    currentPassword: yup
      .string()
      .required("رمز الزامی است")
      .min(8, "رمز حداقل باید 8 رقم باشد")
      .matches(/[a-z]/, "رمز باید حداقل یک حرف کوچک داشته باشد")
      .matches(/[A-Z]/, "رمز باید حداقل یک حرف بزرگ داشته باشد")
      .matches(/\d/, "رمز باید حداقل یک عدد داشته باشد")
      .matches(/[@$!%*?&]/, "رمز باید حداقل یه حرف مخصوص داشته باشد"),
    newPassword: yup
      .string()
      .required("رمز الزامی است")
      .min(8, "رمز حداقل باید 8 رقم باشد")
      .matches(/[a-z]/, "رمز باید حداقل یک حرف کوچک داشته باشد")
      .matches(/[A-Z]/, "رمز باید حداقل یک حرف بزرگ داشته باشد")
      .matches(/\d/, "رمز باید حداقل یک عدد داشته باشد")
      .matches(/[@$!%*?&]/, "رمز باید حداقل یه حرف مخصوص داشته باشد"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "رمز ها باید یکسان باشند")
      .required("رمز را مجدد وارد کنید"),
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const isValid = await trigger();
    if (isValid) {
      console.log(data);
    }
  };

  return (
    <Form FormTitle={"تغییر رمز اولیه ثابت"}>
      <Input
        inputName={"رمز عبور فعلی"}
        // onClick={clickHandler}
        onClick={() => clickHandler("currentPassword")}
        // icon={visibility ? VisibilityOffIcon : VisibilityIcon}
        // type={visibility ? "text" : "password"}
        icon={visibility.currentPassword ? VisibilityOffIcon : VisibilityIcon}
        type={visibility.currentPassword ? "text" : "password"}
        {...register("currentPassword")}
        dir="ltr"
      />
      <p style={{ color: "red", paddingBottom: "10px" }}>
        {errors.currentPassword?.message}
      </p>
      <Input
        inputName={"رمز عبور جدید"}
        // onClick={clickHandler}
        onClick={() => clickHandler("newPassword")}
        icon={visibility.newPassword ? VisibilityOffIcon : VisibilityIcon}
        type={visibility.newPassword ? "text" : "password"}
        {...register("newPassword")}
        dir="ltr"
      />
      <p style={{ color: "red", paddingBottom: "10px" }}>
        {errors.newPassword?.message}
      </p>
      <Input
        inputName={"تکرار رمز عبور جدید"}
        // onClick={clickHandler}
        onClick={() => clickHandler("confirmPassword")}
        // icon={visibility ? VisibilityOffIcon : VisibilityIcon}
        // type={visibility ? "text" : "password"}
        icon={visibility.confirmPassword ? VisibilityOffIcon : VisibilityIcon}
        type={visibility.confirmPassword ? "text" : "password"}
        dir="ltr"
      />
      <p style={{ color: "red", paddingBottom: "10px" }}>
        {errors.confirmPassword?.message}
      </p>
      <Button
        block
        type="primary"
        className="py-5"
        onClick={handleSubmit(onSubmit)}
      >
        تایید
      </Button>
    </Form>
  );
}
