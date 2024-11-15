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
