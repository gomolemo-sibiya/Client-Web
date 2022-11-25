import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  MainWrapper, 
  Main,
  TopBar,
  PathBar,
  Divider,
  ProfileHead,
  ProfileImage,
  MenuButton,
  ProfileName
} from "./styles";
import { 
  CaretDown, 
} from "phosphor-react";

import { profile } from "../../assets";
import Sidebar from '../../components/sidebar';
import DriverTable from '../../components/tables/drivers';
import AddEdit from '../add-edit/addEdit';

const Layout = ({ children }) => {
  return (
    <>
    <MainWrapper>
        <Sidebar />
        <Main>
            <TopBar>
                <ProfileHead>
                    <ProfileImage>
                        <img src={ profile } alt="profileImage" />
                    </ProfileImage>
                    <ProfileName>
                        <p>Anne Hathaway</p>
                    </ProfileName>
                    <MenuButton >
                        <CaretDown  />
                        
                    </MenuButton>
                </ProfileHead>
            </TopBar>
            <Divider />
            <PathBar>
                {/* {children} */}
            </PathBar>
            <div>
                {children}
            </div>
        </Main>
        
    </MainWrapper>
    </>
);
}

export default Layout