import styled from "styled-components";

import { v } from "../../styles/variables";

export const MainWrapper = styled.div`
    display: flex;
`;


export const Main = styled.main`
    width: 100vw;

    h1 {
        font-size: 14px;
    }
`;

export const TopBar = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${v.bgTheme};
    padding: 0 ${v.lgSpacing};
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const PathBar = styled.div`
    width: 100%;
    height: 35px;
    background-color: ${v.bgTheme};
    padding: 0 0 0 ${v.xxlSpacing};
    display: flex;
    align-items: center;

    .icon {
        padding: 0 8px;
        display: flex;
        align-items: center;
    }
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
`;

export const ProfileHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileImage = styled.div`
    img {
        width: 35px;
        height: auto;
        border-radius: ${v.smBorderRadius};
    }
`;

export const ProfileName = styled.div`
    p
    {margin: 0 32px; }
`;

export const MenuButton = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${v.lightGrey};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

