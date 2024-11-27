import React, { useState } from "react";
import "./signup.css";
import ContainerTheme from "../../../Layout/container/Container";
import Input from "../../../Components/input/Input";
import Buttons from "../../../Components/buttons/Buttons";
import Form from "../../../Components/form/Form";
import SubLine from "../../../Components/subLine/SubLine";
import Links from "../../../Components/links/Sublink/Links";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomDate from "../../../Components/CustomDate/CustomDate";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Modal from "../../../Components/modal/modal";
import { schema } from "../../../../validation";
import { useNavigate } from "react-router-dom";
import JalaliDatePicker from "../../../Components/JalaliDatePicker/JalaliDatePicker";
import { useForm, Controller } from "react-hook-form";

export default function SignupForm() {
  const [formStep, setFormStep] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const [passAppear, setPassAppear] = useState(false);
  const [formData, setFormData] = useState({});
  const [code, setCode] = useState({});
  const [titleModal, setTitleModal] = useState(true);
  const number = { phoneNumber: formData.phoneNumber };
  const navigate = useNavigate();
  const oncloseHandler = () => {
    setPassAppear(false);
  };

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

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setCode((previousState) => ({ ...previousState, [id]: value }));
  };

  const onSubmit = async (data) => {
    setFormData(data);
    setPassAppear(!passAppear);
  };

  const reSendCode = async () => {
    setTitleModal(false);
    const responseSende = await fetch(
      "https://internetbankvapi.liara.run/api/v1/Otp/send-otp",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(number),
      }
    );
  };

  const verifyCode = async () => {
    const merg = { ...code, ...number };
    const responseVerify = await fetch(
      "https://internetbankvapi.liara.run/api/v1/Otp/verify-otp",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(merg),
      }
    );

    setPassAppear(!passAppear);
    console.log("res2:", responseVerify);
    const d = await responseVerify.text();
    console.log("d", d);

    if (responseVerify.status === 200) {
      const responseRegister = await fetch(
        "https://internetbankvapi.liara.run/api/v1/User/register",
        {
          method: "POST",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${d}`,
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("res3 :", responseRegister);
      const x = await responseRegister.json();
      console.log("x:", x);
      if (responseRegister.status === 200) {
        navigate("/");
        setTimeout(() => {
          alert(`کابر گرامی ثبتنام شما با موفقیت انجام شد.
          برای ورود به پنل کاربری خود ایمیل و پسورد خود را وارد نمایید`);
        }, 0);
      }
    }
  };

  const nextHandler = async () => {
    const currentStepFields =
      formStep === 0
        ? ["firstName", "lastName", "nationalCode"]
        : formStep === 1
        ? ["birthdate", "phoneNumber", "email"]
        : ["password", "confirmPassword"];

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
        onSubmit={handleSubmit(onSubmit)}>
        {formStep === 0 && (
          <>
            <Input
              style={{ background: "#374151" }}
              inputName="نام"
              type="text"
              placeholder="لطفا نام خود را وارد کنید"
              id="firstName"
              register={register("firstName")}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.firstName?.message}
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
              id="nationalCode"
              dir="ltr"
              register={register("nationalCode")}
              className={"pl-4"}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.nationalCode?.message}
            </p>
          </>
        )}

        {formStep === 1 && (
          <>
            {/* <CustomDate
              name="birthdate"
              label="تاریخ تولد"
              control={control}
              error={errors.birthdate?.message}
              placeholder="انتخاب تاریخ"
            /> */}

            <h1 className="text-white  text-sm pb-2">تاریخ تولد</h1>

            <Controller
              name="birthdate"
              control={control}
              render={({ field }) => (
                <JalaliDatePicker
                  id="birthdate"
                  type={"text"}
                  {...field}
                  onChange={(date) => field.onChange(date)}
                  placeholder="تاریخ تولد خود را انتخاب کنید"
                />
              )}
            />

            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.birthdate?.message}
            </p>

            <Input
              inputName="شماره موبایل"
              type="text"
              placeholder=" مثال 09121212730 "
              dir="ltr"
              id="phoneNumber"
              register={register("phoneNumber")}
              className={"pl-4"}
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
              className={"pl-4"}
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
            {/* <Input
              style={{ background: "#374151" }}
              inputName="نام کاربری"
              type="text"
              placeholder="لطفا نام کاربری خود را وارد کنید"
              register={register("username")}
            />
            <p style={{ color: "red", paddingBottom: "10px" }}>
              {errors.username?.message}
            </p> */}

            <Input
              inputName="رمز عبور"
              type={visibility ? "text" : "password"}
              placeholder="لطفا رمز عبور خود را وارد کنید"
              icon={visibility ? VisibilityOffIcon : VisibilityIcon}
              dir="ltr"
              id="password"
              register={register("password")}
              onClick={clickHandler}
              className={" pl-10 "}
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
              className={" pl-10 "}
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
      {passAppear && (
        <Modal
          id="code"
          onClick2={reSendCode}
          onClick1={verifyCode}
          onChange={onChange}
          onClose={oncloseHandler}
          FormTitle={
            titleModal
              ? "برای تایید شماره تلفن بروی ارسال کد کلیک نمایید"
              : "کد ارسال شده بر روی تلفن خود را وارد نمایید و روی تایید کد کلیک کنید"
          }
        />
      )}
    </ContainerTheme>
  );
}
