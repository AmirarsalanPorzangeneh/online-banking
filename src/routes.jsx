import AccountDetail from "./Components/accountDetail/accountDetail";
import Signup from "./Pages/signUp/signUpFirst/SignUp";
import HomeData from "./Components/HomeData/HomeData";
import Login from "./Pages/loginPage/Login";
import Error from "./Pages/Error/Error";

let routes = [
  { path: "/homedata", element: <HomeData /> },
  { path: "/signup", element: <Signup /> },
  { path: "/", element: <Login /> },
  { path: "/detail", element: <AccountDetail /> },
  { path: "*", element: <Error /> },
];

export default routes;
