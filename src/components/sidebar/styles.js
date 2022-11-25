import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

export const Wrapper = styled.div`
    width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};

    position: relative;
`;

export const SidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xlSpacing};
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${v.black};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const Head = styled.div`
    display: flex;
    align-items: center;
    
    margin-bottom: ${v.lgSpacing};
`;

export const Logo = styled.div`
    width: 52px;
    height: 52px;
    justify-content: center;

    img {
        max-width: 100%;
        height: 100%;
    }
    cursor: pointer;
`;

export const Nav = styled.div`
    background: ${({isActive }) => (!isActive ? `transparent` : v.midGrey)};
    border-radius: ${v.smBorderRadius};
    margin: 20px 0;

    :hover {
        background: #FAFAFA;
    }

    .label {
        color: ${({isActive }) => (!isActive ? v.black : v.green)};
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const Icon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    background: ${({isActive }) => (!isActive ? `transparent` : v.midGrey)};
    
    svg {
        font-size: 20px;
        color: #7A7A7A;
    }

    :active {
        ${({isActive }) => (!isActive ? v.black : v.midGrey)};
    }
`;

export const NavLabel = styled.span`
    display: block;
    flex: 1;
    
    margin-left: ${v.smSpacing};
`;

export const ToolTip = styled.p`
    position: absolute;
    background: #fff;
    z-index: 3;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
`;

