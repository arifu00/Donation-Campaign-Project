import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav/Nav";


const MainLayout = () => {
    return (
        <div className="container mx-auto px-4 md:px-12 py-3 md:py-6">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;