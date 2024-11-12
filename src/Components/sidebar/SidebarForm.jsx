import React from "react";
import SideBarLi from "./sideBarLi/SideBarLi";
import SideBarUl from "./sideBarUl/SideBarUl";
import SideBarWhole from "./sideBarWhole/SideBarWhole";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PieChartIcon from "@mui/icons-material/PieChart";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarForm(props) {
  const [arrowDown, setArrowDown] = useState(true);
  let arrowHandler = () => setArrowDown((upside) => !upside);
  console.log(arrowDown);

  const { expanded } = props;
  const navigate = useNavigate();
  return (
    <SideBarWhole expanded={expanded}>
      <SideBarUl>
        <SideBarLi
          icon={<TextSnippetIcon />}
          liName={"خانه"}
          expanded={expanded}
          to="/homedata"
        />

        <SideBarLi
          icon={<PieChartIcon />}
          liName={"گزارش  "}
          expanded={expanded}
          to={"/report"}
        />
        <SideBarLi
          icon={<MoveToInboxIcon />}
          liName={"انتقال وجه"}
          expanded={expanded}
          to={"/moneytransfer"}
        />
        <SideBarLi
          icon={<ShoppingBagIcon />}
          liName={"تنظیمات"}
          expanded={expanded}
          subIcon={expanded && <KeyboardArrowDownIcon />}
          onClick={arrowHandler}
          className={arrowDown ? "rotate-0 text-white" : "rotate-180"}
        />

        {expanded && (
          <div
            className={`border-b-2 border-gray-600 transition-all duration-300 ease-in-out flex flex-col space-y-6 pr-4 [&>li:hover]:text-gray-400 [&>li:hover]:transition-all [&>li:hover]:delay-100 ${
              arrowDown ? "max-h-96" : "max-h-0 overflow-hidden"
            }`}
          >
            <li
              className={`mr-8 transition-opacity duration-300 ease-in-out   ${
                arrowDown ? "opacity-100 " : "opacity-0 "
              }`}
              onClick={() => navigate("/blockingaccount")}
            >
              مسدود سازی
            </li>
            <li
              className={`mr-8 pb-8 transition-opacity duration-300 ease-in-out ${
                arrowDown ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => navigate('/changingpass')}
            >
              تغییر رمز اولیه ورود
            </li>
          
          </div>
        )}
      </SideBarUl>
    </SideBarWhole>
  );
}
