import React, { useState } from "react";
import Input from "../input/Input";
import { Button } from "antd";
import Form from "../form/Form";
import { CloseOutlined } from "@ant-design/icons"; 
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function PooyaPass(props) {
  const { onClose } = props;
  const [visible, setVisible] = useState(false);

  const clickHandler = () => {
    setVisible(!visible);
  };

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm z-[1000] flex justify-center items-center"
      onClick={onClose}
    >
      <div className="w-96" onClick={(e) => e.stopPropagation()}>
        <Form
          FormTitle="رمز پویا"
          icon={<CloseOutlined />}
          onClose={onClose} 
        >
          <Input
            placeholder=" رمز پویا را وارد کنید "
            type={visible ? "password" : "text"}
            dir="ltr"
            onClick={clickHandler}
            icon={visible ? VisibilityIcon : VisibilityOffIcon}
          />
          <Button type="primary" block className="py-5">
            تایید
          </Button>
        </Form>
      </div>
    </div>
  );
}
