import React from "react";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import SidebarForm from "./Components/sidebar/SidebarForm";
import HeaderForm from "./Components/header/HeaderForm";
import { useLocation } from "react-router-dom";
import ContainerTheme from "./Layout/container/Container";

export default function App() {
  const [expanded, setExpanded] = useState(true);
  const clickHandler = () => setExpanded((makeOpen) => !makeOpen);
  let router = useRoutes(routes);
  let location = useLocation();

  /* select all the elements of details tag that is for top left icon of the user and stores it in the 'allDropdown' variable. */
  const allDropdowns = document.querySelectorAll(".user-dropdown");

  /* sets up an event listener for click events on the whole window */
  window.addEventListener("click", () => {
    /* when the window detects a click (whenever you click anywhere), this code runs. It converts 'allDropdown' nodelist into an array and then loop through each one to sets the 'open' attribute to 'false'. */
    [...allDropdowns].forEach((dropdown) => (dropdown.open = false));
  });

  const isAuthPage =
    location.pathname === "/signup" || location.pathname === "/";
  const isErrorPage = location.pathname === "*";

  return (
    <div>
      {!isAuthPage && !isErrorPage ? (
        <ContainerTheme>
          <HeaderForm clickHandler={clickHandler} />
          <div className="flex">
            <SidebarForm expanded={expanded} />
            <div className="flex items-center justify-center flex-1 ">
              {router}
            </div>
          </div>
        </ContainerTheme>
      ) : (
        <div >{router}</div>
      )}
    </div>
  );
}
