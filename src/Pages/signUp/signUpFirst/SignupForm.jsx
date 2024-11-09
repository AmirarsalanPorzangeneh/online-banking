// import React, { useState } from "react";
// import "./signup.css";
// import ContainerTheme from "../../../Layout/container/Container";
// import Input from "../../../Components/input/Input";
// import Buttons from "../../../Components/buttons/Buttons";
// import Form from "../../../Components/form/Form";
// import SubLine from "../../../Components/subLine/SubLine";
// import Links from "../../../Components/links/Sublink/Links";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// export default function SignupForm() {
//   const schema = yup.object().shape({
//     name: yup.string().required("Your full name is required"),
//     lastName: yup.string().required("Your LastName is required"),
//     idNumber: yup
//       .string()
//       .required("Enter your ID")
//       .length(10, "id must be 10 charechter")
//       .matches(/^\d+$/, "ID number must contain only digits"),
//     date: yup
//       .date()
//       .required("date of birth is required")
//       .max(new Date(), "Date must be in the past"),
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     phoneNumber: yup
//       .string()
//       .required("Phone Number is required")
//       .matches(/^\d{11}$/, "Phone number must be exactly 11 digits"),
//   });
//   const [formStep, setFormStep] = useState(0);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data) => {
//     console.log(data);
//     console.log("Form submitted");
//   };

//   const nextHandler = () => {
//     setFormStep((prevStep) => prevStep + 1);
//   };

//   const prevHandler = () => {
//     setFormStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <ContainerTheme>
//       <Form
//         Header="اینترنت بانک من"
//         FormTitle="ایجاد حساب کاربری"
//         // onSubmit={
//         //   formStep === 1 ? handleSubmit(onSubmit) : (e) => e.preventDefault()
//         // }
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         {formStep === 0 && (
//           <>
//             <Input
//               style={{ background: "#374151" }}
//               inputName="نام"
//               type="text"
//               placeholder="لطفا نام خود را وارد کنید"
//               id="name"
//               register={register("name")}
//             />
//             <p style={{ color: "red" }}> {errors.name?.message}</p>
//             {/* {errors.username && <p>{errors.username.message}</p>} */}
//             {console.log(errors)}
//             <Input
//               style={{ background: "#374151" }}
//               inputName="نام خانوادگی"
//               type="text"
//               placeholder="لطفا نام خانوادگی خود را وارد کنید"
//               id="lastName"
//               register={register("lastName")}
//             />
//             <p style={{ color: "red" }}> {errors.lastName?.message}</p>
//             <Input
//               style={{ background: "#374151" }}
//               inputName="کدملی"
//               type="number"
//               placeholder="لطفا کدملی خود را وارد کنید"
//               id="idNumber"
//               dir="ltr"
//               register={register("idNumber")}
//             />
//             <p style={{ color: "red" }}> {errors.idNumber?.message}</p>
//           </>
//         )}

//         {formStep === 1 && (
//           <>
//             <Input
//               inputName="تاریخ تولد"
//               type="text"
//               placeholder="انتخاب تاریخ"
//               data-jdp
//               id="date"
//               register={register("date")}
//             />
//             <p style={{ color: "red" }}> {errors.date?.message}</p>
//             <Input
//               inputName="شماره موبایل"
//               type="number"
//               placeholder=" مثال 09121212730 "
//               dir="ltr"
//               id="phoneNumber"
//               register={register("phoneNumber")}
//             />
//             <p style={{ color: "red" }}> {errors.phoneNumber?.message}</p>
//             <Input
//               inputName="ایمیل"
//               type="email"
//               placeholder=" لطفا ایمیل خود را وارد کنید"
//               dir="ltr"
//               id="email"
//               register={register("email")}
//             />
//             <p style={{ color: "red" }}> {errors.email?.message}</p>
//             <Buttons
//               className="bg-slate-800 text-blue-600 border-2 border-blue-600 hover:bg-slate-700"
//               btnName="بازگشت"
//               type="button"
//               onClick={prevHandler}
//             />
//           </>
//         )}
//         {formStep === 2 && (
//           <>
//             {/* Username Input */}
//             <Input
//               style={{ background: "#374151" }}
//               inputName="نام کاربری"
//               type="text"
//               placeholder="لطفا نام کاربری خود را وارد کنید"
//               id="username"
//               register={register("username")}
//             />
//             <p style={{ color: "red" }}>{errors.username?.message}</p>

//             {/* Password Input */}
//             <Input
//               inputName="رمز عبور"
//               type={visibility ? "text" : "password"}
//               placeholder="لطفا رمز عبور خود را وارد کنید"
//               icon={visibility ? VisibilityOffIcon : VisibilityIcon}
//               dir="ltr"
//               className="pl-11"
//               id="password"
//               register={register("password")}
//               onClick={clickHandler}
//             />
//             <p style={{ color: "red" }}>{errors.password?.message}</p>

//             {/* Confirm Password Input */}
//             <Input
//               inputName="تایید رمز عبور"
//               type={visibility ? "text" : "password"}
//               placeholder="لطفا رمز عبور را دوباره وارد کنید"
//               icon={visibility ? VisibilityOffIcon : VisibilityIcon}
//               dir="ltr"
//               className="pl-11"
//               id="confirmPassword"
//               register={register("confirmPassword")}
//               onClick={clickHandler}
//             />
//             <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
//           </>
//         )}

//         <Buttons
//           btnName={"ادامه"}
//           type="button"
//           onClick={formStep === 1 ? handleSubmit(onSubmit) : nextHandler}
//         />

//         <SubLine SubText="حساب کاربری دارید ؟">
//           <Links to="/login" linkName="ورود به حساب" />
//         </SubLine>
//       </Form>
//     </ContainerTheme>
//   );
// }

import React, { useState } from "react";
import "./signup.css";
import ContainerTheme from "../../../Layout/container/Container";
import Input from "../../../Components/input/Input";
import Buttons from "../../../Components/buttons/Buttons";
import Form from "../../../Components/form/Form";
import SubLine from "../../../Components/subLine/SubLine";
import Links from "../../../Components/links/Sublink/Links";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomDate from "../../../Components/CustomDate/CustomDate";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function SignupForm() {
  const schema = yup.object().shape({
    name: yup.string().required("نام الزامی است"),
    lastName: yup.string().required("نام خانوادگی الزامی است "),

    idNumber: yup
      .string()
      .required("کد ملی را وارد کنید")
      .matches(/^\d{10}$/, "کدملی باید 10 عدد باشد")
      .test("iranian-national-id", "کد ملی معتبر نیست", (value) => {
        if (!value) return false;

        // Convert the input into an array of numbers
        const digits = value.split("").map(Number);

        // Check for repeated digits (e.g., "1111111111" is invalid)
        if (digits.every((digit) => digit === digits[0])) {
          return false;
        }

        const check = digits.pop(); // last digit is the checksum
        const sum = digits.reduce(
          (acc, digit, idx) => acc + digit * (10 - idx),
          0
        );
        const remainder = sum % 11;

        return (
          (remainder < 2 && check === remainder) ||
          (remainder >= 2 && check === 11 - remainder)
        );
      }),

    date: yup
      .date()
      .required("تاریخ تولد را وارد کنید")
      .max(new Date(), "تاریخ باید در گذشته باشد"),
    email: yup
      .string()
      .email("ایمیل معتبر وارد کتید")
      .required("ایمیل الزامی است"),
    phoneNumber: yup
      .string()
      .required("شماره تلفن الزامی است")
      // .matches(/^\d{11}$/, "شماره تلفن باید حداقل 11 عدد باشد"),
      .matches(/^09\d{9}$/, "شماره تلفن باید 11 رقم و با 09 شروع شود"),
    username: yup.string().required("یوزر الزامی است"),
    
    password: yup
    .string()
    .required("رمز الزامی است")
    .min(8, "رمز حداقل باید 8 رقم باشد")
    .matches(/[a-z]/, "رمز باید حداقل یک حرف کوچک داشته باشد")
    .matches(/[A-Z]/, "رمز باید حداقل یک حرف بزرگ داشته باشد")
    .matches(/\d/, "رمز باید حداقل یک عدد داشته باشد")
    .matches(
      /[@$!%*?&]/,
      "رمز باید حداقل یه حرف مخصوص داشته باشد"
    ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "رمز ها باید یکسان باشند")
      .required("رمز را مجدد وارد کنید"),
  });

  const [formStep, setFormStep] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const nextHandler = async () => {
    const currentStepFields =
      formStep === 0
        ? ["name", "lastName", "idNumber"]
        : formStep === 1
        ? ["date", "phoneNumber", "email"]
        : ["username", "password", "confirmPassword"];

    const isStepValid = await trigger(currentStepFields);

    if (isStepValid) {
      setFormStep((prev) => prev + 1);
    }
  };

  const prevHandler = () => {
    setFormStep((prev) => prev - 1);
  };

  const clickHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <ContainerTheme>
      <Form
        Header="اینترنت بانک من"
        FormTitle="ایجاد حساب کاربری"
        onSubmit={handleSubmit(onSubmit)}
      >
        {formStep === 0 && (
          <>
            <Input
              style={{ background: "#374151" }}
              inputName="نام"
              type="text"
              placeholder="لطفا نام خود را وارد کنید"
              id="name"
              register={register("name")}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.name?.message}
            </p>

            <Input
              style={{ background: "#374151" }}
              inputName="نام خانوادگی"
              type="text"
              placeholder="لطفا نام خانوادگی خود را وارد کنید"
              id="lastName"
              register={register("lastName")}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.lastName?.message}
            </p>

            <Input
              style={{ background: "#374151" }}
              inputName="کدملی"
              type="text"
              placeholder="لطفا کدملی خود را وارد کنید"
              id="idNumber"
              dir="ltr"
              register={register("idNumber")}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.idNumber?.message}
            </p>
          </>
        )}

        {formStep === 1 && (
          <>
           
            <CustomDate
              name="date"
              label="تاریخ تولد"
              control={control}
              error={errors.date?.message}
              placeholder="انتخاب تاریخ"
            />

            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.date?.message}
            </p>

            <Input
              inputName="شماره موبایل"
              type="text"
              placeholder=" مثال 09121212730 "
              dir="ltr"
              id="phoneNumber"
              register={register("phoneNumber")}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.phoneNumber?.message}
            </p>

            <Input
              inputName="ایمیل"
              type="email"
              placeholder=" لطفا ایمیل خود را وارد کنید"
              dir="ltr"
              id="email"
              register={register("email")}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.email?.message}
            </p>

            <Buttons
              className="bg-slate-800 text-blue-600 border-2 border-blue-600 hover:bg-slate-700"
              btnName="بازگشت"
              type="button"
              onClick={prevHandler}
            />
          </>
        )}

        {formStep === 2 && (
          <>
            <Input
              style={{ background: "#374151" }}
              inputName="نام کاربری"
              type="text"
              placeholder="لطفا نام کاربری خود را وارد کنید"
              id="username"
              register={register("username")}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.username?.message}
            </p>

            <Input
              inputName="رمز عبور"
              type={visibility ? "text" : "password"}
              placeholder="لطفا رمز عبور خود را وارد کنید"
              icon={visibility ? VisibilityOffIcon : VisibilityIcon}
              dir="ltr"
              id="password"
              register={register("password")}
              onClick={clickHandler}
              className={' pl-10 '}
             
            />
            
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.password?.message}
            </p>

            <Input
              inputName="تایید رمز عبور"
              type={visibility ? "text" : "password"}
              placeholder="لطفا رمز عبور را دوباره وارد کنید"
              icon={visibility ? VisibilityOffIcon : VisibilityIcon}
              dir="ltr"
              id="confirmPassword"
              register={register("confirmPassword")}
              onClick={clickHandler}
              className={' pl-10 '}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.confirmPassword?.message}
            </p>

            <Buttons
              className="bg-slate-800 text-blue-600 border-2 border-blue-600 hover:bg-slate-700"
              btnName="بازگشت"
              type="button"
              onClick={prevHandler}
            />
          </>
        )}

        <Buttons
          btnName={formStep < 2 ? "ادامه" : "ثبت نام"}
          type="button"
          onClick={formStep === 2 ? handleSubmit(onSubmit) : nextHandler}
        />

        <SubLine SubText="حساب کاربری دارید ؟">
          <Links to="/login" linkName="ورود به حساب" />
        </SubLine>
      </Form>
    </ContainerTheme>
  );
}
