import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <h1 className="text-5xl">Hello world</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;