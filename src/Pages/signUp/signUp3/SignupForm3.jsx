import "../signUp1/signup.css";
import ContainerTheme from "../../../Layout/container/Container";
import Input from "../../../Components/input/Input";
import Buttons from "../../../Components/buttons/Buttons";
import Form from "../../../Components/form/Form";
import SubLine from "../../../Components/subLine/SubLine";
import Links from "../../../Components/links/Sublink/Links";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function SignupForm() {
  const [visibility, setVisibility] = useState(false);
  let clickHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <ContainerTheme>
      <Form Header={"اینترنت بانک من"} FormTitle={"ایجاد حساب کاربری"}>
        {/* username input */}
        <Input
          style={{ background: "#374151" }}
          inputName={"نام کاربری"}
          type="number"
          placeholder="لطفا نام کاربری خود را وارد کنید"
        />
        {/* password input */}
        <Input
          inputName={"رمز عبور"}
          type={visibility ? "type" : "password"}
          placeholder=""
          icon={visibility ? VisibilityOffIcon : VisibilityIcon}
          dir={"ltr"}
          className={"pl-11 "}
          onClick={clickHandler}
        />

        {/* password input */}
        <Input
          inputName={"رمز عبور"}
          type={visibility ? "type" : "password"}
          placeholder=""
          icon={visibility ? VisibilityOffIcon : VisibilityIcon}
          dir={"ltr"}
          className={"pl-11 "}
          onClick={clickHandler}
        />
        <Buttons btnName={"ثبت نام"} to={"/"} />
        <Buttons
          className={
            " bg-slate-800 text-blue-600  border-2 border-blue-600 hover:bg-slate-700 "
          }
          btnName={"بازگشت"}
          to="/signup2"
        />
        <SubLine SubText={"حساب کاربری دارید ؟"}>
          <Links to={"/login"} linkName={"ورود به حساب"} />
        </SubLine>
      </Form>
    </ContainerTheme>
  );
}
