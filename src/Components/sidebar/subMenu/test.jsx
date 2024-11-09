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
import SubMenu from "./subMenu/SubMenu";
import SubMenuHandler from "../subMenuHandler/SubMenuHandler";

export default function SidebarForm(props) {
  const [arrowDown, setArrowDown] = useState(true);
  let arrowHandler = () => setArrowDown((upside) => !upside);
  console.log(arrowDown);

  const { expanded } = props;

  return (
    <SideBarWhole expanded={expanded}>
      <SideBarUl>
        <SideBarLi
          icon={<TextSnippetIcon />}
          liName={"خانه"}
          expanded={expanded}
        />
        <SideBarLi
          icon={<PieChartIcon />}
          liName={"گزارش  "}
          expanded={expanded}
        />
        <SideBarLi
          icon={<MoveToInboxIcon />}
          liName={"انتقال وجه"}
          expanded={expanded}
        />
        <SideBarLi
          icon={<ShoppingBagIcon />}
          liName={"تنظیمات"}
          expanded={expanded}
          subIcon={<KeyboardArrowDownIcon />}
          onClick={arrowHandler}
          className={arrowDown ? "rotate-0 text-white" : "rotate-180"}
        />
        {expanded && (
          <SubMenuHandler
            className={arrowDown ? "max-h-96" : "max-h-0 overflow-hidden"}
          >
            <SubMenu
              className={
                arrowDown ? "opacity-100 hover:text-gray-400" : " opacity-0"
              }
              name={"مسدود سازی"}
            />
            <SubMenu
              className={arrowDown ? "opacity-100 " : " opacity-0"}
              name={"تغییر رمز اولیه ورود"}
            />
          </SubMenuHandler>
        )}
      </SideBarUl>
    </SideBarWhole>
  );
}
