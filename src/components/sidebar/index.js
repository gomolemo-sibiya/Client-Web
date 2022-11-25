import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Nav,
    NavLink,
    Icon,
    NavLabel,
    Logo,
    Wrapper,
    SidebarButton,
    Head,
    ToolTip
} from "./styles";

import { 
    CaretLeft, 
    Notification,
    Desktop,
    Truck,
    Users,
    FaceMask,
    Recycle,
    Trash
} from "phosphor-react";

import { logoSVG } from "../../assets";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [over, setOver]= useState(false);
    const { pathname } = useLocation();
    
    const toolTipStyle = {
        position: 'absolute',
        background: '#fff',
        zIndex: 3,
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
        padding: '6px 12px',
        borderRadius:'4px',
        fontSize: '15px',
        whiteSpace: 'nowrap',
        transition: '0s',
        opacity: 1
    }

    if(over){
        toolTipStyle.opacity = 1;
    }
      else{
        toolTipStyle.opacity = 0;
    }

    return (
        <Wrapper isOpen={sidebarOpen}>
            <>
                <SidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <CaretLeft color="#FFF"/>
                </SidebarButton>
            </>
            <Head>
                <Logo>
                    <img src={logoSVG} alt="logo" />
                </Logo>
                {sidebarOpen && (
                    <>
                        <span>Admin Portal</span>
                    </>
                )}
            </Head>
                
            {linksArray.map(({ icon, label, to }) => (
                <Nav key={label} isActive={pathname === to}>
                    <NavLink to={to} style={!sidebarOpen ? { width: `fit-content`} : {}} >
                        <Icon className="icon">{icon}</Icon>
                        {sidebarOpen && (
                            <>
                                <NavLabel className="label">{label}</NavLabel>
                            </>
                        )}
                    </NavLink>
                </Nav>
            ))}
        </Wrapper>
    );
};

const linksArray = [
    {
        label: "Notifications",
        icon: <Notification />,
        to: "/",
    },
    {
        label: "Administrators",
        icon: <Desktop />,
        to: "/administrators",
    },
    {
        label: "Drivers",
        icon: <Truck />,
        to: "/drivers",
    },
    {
        label: "Clients",
        icon: <Users />,
        to: "/clients",
    },
    {
        label: "Cleaners",
        icon: <FaceMask />,
        to: "/cleaners",
    },
    {
        label: "Recycling Pickups",
        icon: <Recycle />,
        to: "/recycling-pickups",
    },
    {
        label: "Recycling Dropoffs",
        icon: <Trash />,
        to: "/recycling-dropoffs",
    },
];

export default Sidebar;
