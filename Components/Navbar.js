
import { Button } from 'react-bootstrap';
import React from "react";
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { getUser } from '../Commons/utils.js'


const Navbar = (props) => {

  debugger
  const router = useRouter()
  const [user, setUser] = useState(props.user)
  debugger

  useEffect(() => {
    const interval = setInterval(() => {
      setUser(getUser());
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  if(!user){
    router.push('login')
  }

  const handleLogout = () => {
    console.log("logout ")
    Cookies.remove('user')
    router.push('login')
  }

  return (
    <>
      {user && (
      <nav className='navbar navbar-expand-md navbar-white bg-light'>
      <div className='navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2'>
      <span  className="navbar-brand mx-2">
           {user.name}
         </span>
      </div>
      <div className="mx-10 w-50 order-0">
      {user.displayRemainingTime}
      </div>
      <div style={{justifyContent: "flex-end"}} className="navbar-collapse  w-100 collapse order-3 dual-collapse2">
      <Button  onClick={handleLogout} type="submit">Logout</Button>
      </div>
  </nav>)
      
      
      }
    </>
  );
};

export default Navbar;