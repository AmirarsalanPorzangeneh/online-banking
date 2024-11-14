import AccountDetail from "./Components/accountDetail/accountDetail";
import Signup from "./Pages/signUp/signUpFirst/SignUp";
import HomeData from "./Components/HomeData/HomeData";
import Login from "./Pages/loginPage/Login";
import Error from "./Pages/Error/Error";
import Report from "./Pages/report/Report";
import MoneyTransfer from "./Pages/moneyTransfer/MoneyTransfer";
import ChangingPass from "./Pages/changingPass/ChangingPass";
import BlockingAccount from "./Pages/blockingAccount/BlockingAccount";
import PooyaPass from "./Components/pooyaPass/PooyaPass";
import AccountLists from "./Pages/AccountLists/AccountLists";

let routes = [
  { path: "/homedata", element: <HomeData /> },
  { path: "/signup", element: <Signup /> },
  { path: "/", element: <Login /> },
  { path: "/detail", element: <AccountDetail /> },
  { path: "/report", element: <Report /> },
  { path: "/moneytransfer", element: <MoneyTransfer /> },
  { path: "/changingpass", element: <ChangingPass /> },
  { path: "/block", element: <BlockingAccount /> },
  { path: "/lists", element: <AccountLists /> },
  { path: "/pooya", element: <PooyaPass /> },

  { path: "*", element: <Error /> },
];

export default routes;
