import React from "react";
import ContainerTheme from "../../../Layout/container/Container";
import Input from "../../../Components/input/Input";
import Buttons from "../../../Components/buttons/Buttons";
import Form from "../../../Components/form/Form";
import SubLine from "../../../Components/subLine/SubLine";
import Links from "../../../Components/links/Sublink/Links";

export default function SignupForm2() {
  return (
    <ContainerTheme>
      <Form Header={"اینترنت بانک من"} FormTitle={"ورود به حساب کاربری"}>
        <Input
          inputName={"تاریخ تولد"}
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
