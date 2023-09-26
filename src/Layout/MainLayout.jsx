import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Components/Header/Nav/Nav";
import { useEffect } from "react";

const MainLayout = () => {
  const loc = useLocation();
//   console.log(loc);
    useEffect(()=>{
        if(loc.pathname === '/'){
            document.title='Donation-Campaign'
        }
        else{
            document.title=`Donation-Campaign${loc.pathname.replace('/','-')}`
        }
    }, [loc.pathname])
  return (
    <div className="container mx-auto px-4 md:px-12 py-3 md:py-6">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
