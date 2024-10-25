import Buttons from "../../Components/buttons/Buttons";
import Input from "../../Components/input/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState, useEffect } from "react";
import Form from "../../Components/form/Form";
import SubLine from "../../Components/subLine/SubLine";
import Links from "../../Components/links/Sublink/Links";
import ContainerTheme from "../../Layout/container/Container";

export default function LoginForm() {
  const [visibility, setVisibility] = useState(false);
  let clickHandler = () => {
    setVisibility(!visibility);
  };

  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const onChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setValues((previousState) => ({ ...previousState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    setSubmit(true);
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && submit) {
      console.log(values);
    }
  }, [error]);

  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.email) {
      errors.email = "ایمیل خود را وارد کنید";
    } else if (!regex.test(values.email)) {
      errors.email = "فرمت ایمیل اشتباه است";
    }
    if (!value.password) {
      errors.password = "رمز عبور خود را وارد کنید";
    } else if (value.password.length < 4) {
      errors.password = "تعداد کاراکتر کمتر از حد مجاز";
    }
    return errors;
  };

  return (
    <>
      <ContainerTheme>
        <Form
          Header={"اینترنت بانک من"}
          FormTitle={"ورود به حساب کاربری"}
          onSubmit={handleSubmit}>
          <Input
            inputName="پست الکترونیک"
            type="text"
            placeholder="لطفا ایمیل خود را وارد کنید"
            dir={"ltr"}
            onChange={onChange}
            id="email"
          />
          <p style={{ color: "red" }}>{error.email}</p>
          <Input
            inputName={"رمز عبور"}
            type={visibility ? "type" : "password"}
            placeholder=""
            icon={visibility ? VisibilityOffIcon : VisibilityIcon}
            dir={"ltr"}
            className={"pl-11 "}
            onClick={clickHandler}
            onChange={onChange}
            id="password"
          />
          <p style={{ color: "red" }}>{error.password}</p>
          <button
            className={`text-white w-full my-2 py-2 px-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-all ease-in-out delay-200`}>
            ورود به حساب
          </button>

          <SubLine SubText={"عضو نیستید ؟"}>
            <Links linkName="ایجاد حساب" to="/signup" />
          </SubLine>
        </Form>
        {/* whole form */}
      </ContainerTheme>
    </>
  );
}
