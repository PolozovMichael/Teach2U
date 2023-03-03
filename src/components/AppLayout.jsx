import { Outlet } from "react-router-dom";
import SideBarishe from "./SideBarishe";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <SideBarishe />
        <Outlet />
    </div>;
};

export default AppLayout;