import React from "react";
import Buttons from "../../Components/buttons/Buttons";
import { Link } from "react-router-dom";
import DropDown from "../links/drop-down/DropDown";
import HeaderHolder from "./headerHolder/HeaderHolder";
import HeaderIcons from "./headerIcons/HeaderIcons";
import HeaderIconHolder from "./headerIconHolder/HeaderIconHolder";
import NotesIcon from '@mui/icons-material/Notes';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Groups2Icon from '@mui/icons-material/Groups2';

export default function HeaderForm(props) {
  const { clickHandler } = props;
  return (
    <div>
      {/* header */}
      <HeaderHolder>
        {/* right side */}
        <HeaderIconHolder>
          <Link>
            <HeaderIcons
              icon={< Groups2Icon  sx={{ fontSize: 40 }}/> }
              className={"hidden md:block mr-4"}
            />
          </Link>
          <Link>
            <HeaderIcons
              icon={<NotesIcon  sx={{ fontSize: 30 }}/> }
              onClick={clickHandler}
              className={"mr-4 "}
            />
          </Link>
        </HeaderIconHolder>
        {/* left side */}
        <HeaderIconHolder>
          {/* Button for medium and larger screens */}
          <Buttons
            
            btnName={
              <span>
                <span className="hidden md:block">
                  ساخت حساب جدید{" "}
                  <HeaderIcons src={"/icons/plus.png"} className={"inline"} />
                </span>
                <span className="block md:hidden">
                  حساب جدید{" "}
                  <HeaderIcons src={"/icons/plus.png"} className={"inline"} />
                </span>
              </span>
            }
          />

          <HeaderIcons
          icon={< NotificationsIcon/>}
            
            className={"mx-3 cursor-pointer"}
          />

          <DropDown username={"jese Leos"} email={"name@example.com"}  />
        </HeaderIconHolder>
      </HeaderHolder>
    </div>
  );
}
