import LoginPage from "./Pages/loginPage/loginPage";
import AccountDetail from "./Components/accountDetail/accountDetail";
import Signup from "./Pages/signUp/signUp1/SignUp";
import Home from "./Pages/Home/Home";
import SignUp2 from "./Pages/signUp/signUp2/signUp2";
import Login from "./Pages/loginPage/Login";
import Signup3 from "./Pages/signUp/signUp3/Signup3";

// Define routes array first
let routes = [
  { path: "/home", element: <Home /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },

  { path: "/signup2", element: <SignUp2 /> },
  { path: "/signup3", element: <Signup3 /> },
  { path: "/detail", element: <AccountDetail /> },
  { path: "/", element: <LoginPage /> },
];

// Export routes
export default routes;
