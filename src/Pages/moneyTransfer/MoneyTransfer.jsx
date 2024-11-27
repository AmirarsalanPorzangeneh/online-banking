import React, { useState } from "react";
import PooyaPass from "../../Components/pooyaPass/PooyaPass";
import Input from "../../Components/input/Input";
import CustomDate from "../../Components/CustomDate/CustomDate";
import Buttons from "../../Components/buttons/Buttons";
import { useForm } from "react-hook-form";
import Form from "../../Components/form/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./monyTransfer.css";

export default function MoneyTransfer() {
  const [passAppear, setPassAppear] = useState(false);
  const passHandler = () => {
    setPassAppear(!passAppear);
  };
  const oncloseHandler = () => {
    setPassAppear(false);
  };
  console.log(passAppear);

  const schema = yup.object().shape({
    amount: yup
      .string()
      .required("لطفا مبلغ را وارد کنید")
      .test(
        "is-numeric-and-greater-than-10000",
        "حداقل مبلغ موردنیاز جهت افتتاح حساب 10000 تومان است",
        (value) => {
          const numberValue = Number(value);
          return !isNaN(numberValue) && numberValue >= 10000;
        }
      ),
  });

  const onSubmit = (e) => {
    e.preventDefault;
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <>
      <Form
        FormTitle="انتقال وجه"
        onSubmit={handleSubmit(onSubmit)}
        className="	absolute top-36">
        <Input
          dir="ltr"
          type="number"
          inputName="کارت مبدا"
          placeholder="0000 - 0000 - 0000 - 0000"
        />
        <Input
          dir="ltr"
          type="number"
          inputName="کارت مقصد"
          placeholder="0000 - 0000 - 0000 - 0000"
        />
        <Input
          dir="ltr"
          type="text"
          id="amount"
          inputName="مبلغ(تومان)"
          register={register("amount")}
        />
        {/* <p style={{ color: "red", paddingBottom: "10px" }}>
          {errors.amount?.message}
        </p> */}
        <Input inputName="CVV2" dir="ltr" />
        <CustomDate label="تاریخ انقضا" name="date" control={control} />
        <Buttons btnName="تایید" onClick={passHandler} />
        {passAppear && <PooyaPass onClose={oncloseHandler} />}
      </Form>
    </>
  );
}

// import React from "react";
// import { Button, Form, Input } from "antd";
// import ContainerTheme from "../../Layout/container/Container";
// const MyFormItemContext = React.createContext([]);
// function toArr(str) {
//   return Array.isArray(str) ? str : [str];
// }
// const MyFormItemGroup = ({ prefix, children }) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatPath = React.useMemo(
//     () => [...prefixPath, ...toArr(prefix)],
//     [prefixPath, prefix]
//   );
//   return (
//     <MyFormItemContext.Provider value={concatPath}>
//       {children}
//     </MyFormItemContext.Provider>
//   );
// };
// const MyFormItem = ({ name, ...props }) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatName =
//     name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
//   return <Form.Item name={concatName} {...props} />;
// };
// const MoneyTransfer = () => {
//   const onFinish = (value) => {
//     console.log(value);
//   };
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-96 ">
//         <h2 className="text-white text-center mb-8 text-2xl font-bold">
//           انتقال وجه
//         </h2>
//         <Form
//           name="form_item_path"
//           layout="vertical"
//           onFinish={onFinish}
//           className="w-96">
//           <MyFormItemGroup prefix={["user"]}>
//             <MyFormItemGroup prefix={["name"]}>
//               <MyFormItem name="firstName" label="First Name">
//                 <Input />
//               </MyFormItem>
//               <MyFormItem name="lastName" label="Last Name">
//                 <Input />
//               </MyFormItem>
//             </MyFormItemGroup>

//             <MyFormItem name="age" label="Age">
//               <Input />
//             </MyFormItem>
//           </MyFormItemGroup>

//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };
// export default MoneyTransfer;
