import React from "react";
import './Sidebar.css'
import { useNavigate } from "react-router-dom";


export default function SideBarLi(props) {
  const { icon, expanded, liName, subIcon, onClick, className, to } = props;
  const navigate = useNavigate()

  const hadleCLick = () => {
    if (onClick) onClick()
      navigate(to)
  } 
  
  return (
    <li onClick={hadleCLick} >
      
     
      <span className={`overflow-hidden transition-all text-gray-300  ${
          expanded ? "w-6 ml-2" : "w-0"
        }`} >

      {icon}
      

      </span>
     
      <span
        className={`overflow-hidden transition-all pr-2 ${
          expanded ? "w-52" : "w-0"
        }`}
      >
        {liName}
      </span>
      <span className={`text-gray-300 transition-all delay-100 ${className}`} >{subIcon}</span>
     
    </li>
  );
}
