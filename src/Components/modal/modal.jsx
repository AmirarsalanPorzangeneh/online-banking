import React, { useState } from "react";
import Input from "../input/Input";
import { Button } from "antd";
import Form from "../form/Form";
import { CloseOutlined } from "@ant-design/icons";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Buttons from "../buttons/Buttons";

export default function Modal(props) {
  const { onClose, onClick1, onClick2, onChange, id, FormTitle } = props;

  const oncloseHandler = () => {
    setPassAppear(false);
  };

  const clickHandler = () => {
    setVisible(!visible);
  };

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm z-[1000] flex justify-center items-center"
      onClick={oncloseHandler}>
      <div className="w-96" onClick={(e) => e.stopPropagation()}>
        <Form FormTitle={FormTitle} icon={<CloseOutlined />} onClose={onClose}>
          <Input
            placeholder="635854"
            dir="ltr"
            onClick={clickHandler}
            onChange={onChange}
            id={id}
          />
          <Button
            type="primary"
            block
            className="py-5 mb-2.5"
            onClick={onClick1}>
            تایید کد
          </Button>
          <Button
            type="primary"
            block
            className="py-5 mb-2.5"
            onClick={onClick2}>
            ارسال کد
          </Button>
        </Form>
      </div>
    </div>
  );
}
