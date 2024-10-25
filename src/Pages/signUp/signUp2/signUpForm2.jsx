import React from "react";
import ContainerTheme from "../../../Layout/container/Container";
import Input from "../../../Components/input/Input";
import Buttons from "../../../Components/buttons/Buttons";
import Form from "../../../Components/form/Form";
import SubLine from "../../../Components/subLine/SubLine";
import Links from "../../../Components/links/Sublink/Links";
import "../../../assets/date/jalalidatepicker.min.css";
import "../../../assets/date/jalalidatepicker.min.js";

export default function SignupForm2() {
  jalaliDatepicker.startWatch({
    minDate: "attr",
    maxDate: "attr",
  });

  return (
    <ContainerTheme>
      <Form Header={"اینترنت بانک من"} FormTitle={"ورود به حساب کاربری"}>
        <h5 className="text-white text-sm">تاریخ تولد</h5>
        <input
          style={{
            background: "#374151",
          }}
          className={` my-2 py-2 px-3 w-full rounded-md text-gray-300 border-spacing-1 border-gray-600 outline-none border-[1px]`}
          type="text"
          placeholder="انتخاب تاریخ"
          data-jdp
        />
        <Input
          inputName={"شماره موبایل"}
          type="number"
          placeholder=" مثال 09121212730 "
          dir="ltr"
        />
        <Input
          inputName={"ایمیل"}
          type="email"
          placeholder=" لطفا ایمیل خود را وارد کنید"
          dir="ltr"
        />
        <Buttons btnName={"ادامه"} to={"/signup3"} />

        <Buttons
          className={
            " bg-slate-800 text-blue-600  border-2 border-blue-600 hover:bg-slate-700 "
          }
          btnName={"بازگشت"}
          to="/signup"
        />

        <SubLine SubText={"حساب کاربری دارید ؟"}>
          <Links linkName="ورود به حساب" to={"/login"} />
        </SubLine>
      </Form>
    </ContainerTheme>
  );
}
