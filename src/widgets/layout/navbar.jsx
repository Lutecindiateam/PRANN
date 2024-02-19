import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";


export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate()
  const handleClick = () => {
   navigate("/donate"); // Use router.push to navigate to the specified route
  };
  const handleVClick = () => {
    navigate("/volunteer"); // Use router.push to navigate to the specified route
   };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
          style={{ fontSize: '1.4rem' }} 
        >
          
          {href ? (
            
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3" >
      <div className="container mx-auto flex items-center justify-between "  style={{color:"#505050"}} >
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-lg "  style={{ fontSize: '1.4rem' }}>
            {brandName}
          </Typography>  
        </Link>
      <br/>
      <br/>
      <br/>

        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          
          {/* <a
            href="https://www.material-tailwind.com/blocks?ref=mtkr"
            target="_blank"
          >
            <Button variant="text" size="sm" color=" black" fullWidth>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}  */}
       
        </div>


        <IconButton
          variant="text"
          size="sm"
          color="orange"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
     
      </div>
      {/* <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
        >
       
        <div className="container mx-auto" >
          {navList}
          <a
            href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" size="sm" fullWidth style={{color:"black"}}>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav> */}
      <div style={{paddingLeft:"55rem"}}>
      <button class="bg-indigo-500 hover:bg-blue-900 text-white  py-2 px-7 rounded "  style={{borderRadius:"20px" , fontSize:"25px" , boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}} onClick={handleClick}>
   Donate 
</button>
<button class="bg-orange-500  text-white ml-3  py-2 px-7 rounded "  style={{borderRadius:"20px" , fontSize:"25px" , boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}} onClick={handleVClick} >
  Volunteer
</button>
      </div>
     
    </MTNavbar>
   
   
  );
}

Navbar.defaultProps = {
  // brandName: "Material Tailwind React",
  action: (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-kit-react"
      target="_blank"
    >
      {/* <Button variant="gradient" size="sm" fullWidth>
        free download
      </Button> */}
    </a>
    
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
