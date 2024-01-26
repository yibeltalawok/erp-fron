import React, { Fragment, useState, useEffect, useRef } from "react";
import Logo from '../../img/Logo_p.png';
import { useNavigate } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import { FcAudioFile } from "react-icons/fc";
import { CiBank,CiFileOn,CiYoutube,CiSquarePlus,CiCamera} from "react-icons/ci";
const Header=()=>{
  const [navBackground, setNavBackground] = useState(false);
  const [nav, setNav] = useState(false);
   const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
    const navigate=useNavigate();
    const location = useLocation();
  function logoutBtn(){  
    // localStorage.clear();
    navigate("/login");
  }
      // if(userInfo==null)
      //    {
      //     navigate("/login");
      //     }
      const handleNav = () => {
        setNav((prev) => !prev);
      };
      const navRef = useRef();
      navRef.current = navBackground;

  const styles = () => {
    switch (location.pathname) {
      case "/":
        return navBackground ? "[#CECFCC]" : "[#CECFCC]";
      default:
        return navBackground ? "#[#CECFCC]" : "[#CECFCC]";
    }
  };
  // logo
  const logos = () => {
    switch (location.pathname) {
      case "/":
        return (
          <img
            className="xl:w-48 md:w-40 w-32 bg-[#CECFCC] h-16"
            src={navBackground ? Logo : Logo}
            alt="Logo"
          />
        );
      default:
        return (
          <img
            className="xl:w-48 md:w-40 w-32 xl:bg-slate-100 h-16"
            src={navBackground ? Logo : Logo}
            alt="Logo"
          />
        );}};

        const navLinkStyles=({isActive})=>{
          return{
           color:isActive ?'green':'black',
           fontWeight:isActive?'bolder':'unset',
           fontSize:isActive? '20px':'unset'
         }
         }

    return(
        <>
        <div
        style={{
          background: styles(),
        }}
        className=" xl:bg-slate-100 right-0 left-0 z-10 py-2 border-none h-20"
        p="md"
      >
        <div
          className="pl-3 mt-2"
          style={{ display: "flex", alignItems: "center", height: "100%" }}
        >  
        <div className="container flex justify-between items-center mx-auto px-3">
           <div className="flex">
            <div className="flex bg-white  items-center fixed md:relative left-0 top-0 w-full">
                   {/* <img src={Logo} className="h-20 w-20"/> */}
               <div className="flex">
                  <NavLink to="/">{logos}</NavLink>
                </div>
                <div
                  onClick={handleNav}
                  className="block md:hidden mr-4 text-textColor"
                >
                  {!nav && <RiMenuLine size={24} />}
                </div>
             </div> 
          </div> 
        <ul className="hidden md:flex">
              <li className='p-4 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg uppercase  flex font-medium'>
                <NavLink style={navLinkStyles} className='inline-flex'  to="/">
                <CiBank />
                <p className="ml-1">መግቢያ</p>
                </NavLink>
              </li>
              <li className=' p-4 ml-5 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg uppercase  flex font-medium'>
                <NavLink style={navLinkStyles} className='inline-flex'
                  to="/images"
                >
                <CiCamera />
                 <p className="ml-1">ፎቶዎች</p> 
                </NavLink>
              </li>
              <li className='p-4 ml-5 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg uppercase  flex font-medium'>               
                 <NavLink style={navLinkStyles} className='inline-flex' 
                  to="/videos"
                >
                <CiYoutube />
                 <p className="ml-1">ቪዲዮዎች</p> 
                </NavLink>
              </li>
              <li className='p-4 ml-5 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg uppercase  flex font-medium'>
              <NavLink style={navLinkStyles} className='inline-flex'
                  to="/audios"
                >
                <FcAudioFile />
                <p className="ml-1">ኦዲዮዎች</p>
                </NavLink>
              </li>
              <li className='p-4  ml-5 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-lg uppercase  flex font-medium'>
              <NavLink style={navLinkStyles} className='inline-flex'
                  to="/files">
               <CiFileOn />
                  <p className="ml-1">ፋይሎች</p>
                </NavLink>
              </li>
              <li className='p-4 ml-5 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-lg uppercase  flex font-medium'>
              <NavLink style={navLinkStyles} className='inline-flex'
                  to="/addfile"
                >
                <CiSquarePlus />
                <p className="ml-1">አዲስ ጭምር</p>  
                </NavLink>
              </li>
              <li className='  ml-20 -mr-24 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-lg uppercase text-blue-700 flex font-medium'>
              <button
                  className="leading-snug hover:text-primary font-display  hover:opacity-75"
                  onClick={logoutBtn}
                >
                ውጥት
                </button>
              </li>
              </ul>
          <ul
              className={
                nav
                  ? "xl:hidden fixed left-0 top-0 w-full text-textColor bg-white ease-in-out duration-500 hover:opacity-75 text-lg hover:transform hover:scale-100 hover:md:scale-125 hover:duration-300"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >

               <div className="flex my-2 ml-4">
                <h1>
                  <img
                    className="w-20 ml-4 "
                    src={Logo}
                    alt="Logo"
                  />
                  </h1>
                <h1 onClick={handleNav} className="mr-4">
                  {" "}
                  {nav && <HiOutlineX size={20} />}
                </h1>
                </div>
          
          <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/"
                >
                  home
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/images"
                >
                  Images
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/videos"
                >
                  Videos 
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/audios"
                >
                  Audios
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/files"
                >
                  Files
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/addfile"
                >
                  Add New
                </a>
              </li>
              <li className="p-4 text-center">
                <button
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  onClick={logoutBtn}
                >
                  Logout
                </button>
              </li>
          </ul>
        </div>
        </div>
        </div> 
        {/* </div> */}
        </>)}
export default Header;