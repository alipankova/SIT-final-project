import styled from "styled-components";
import "@fontsource/montserrat";

export const NavWrapper = styled.nav`
    display: flex;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100vw;
    height: 122px;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #DDD8C4;
    background-color: rgba(255, 255, 255, 0.54);
`;

export const NavbarLogoContainerDiv = styled.img`
    display: flex;
    justify-content: flex-start;
    width: 120px;
    height: 90px;
    margin-left: 95px;
`;

export const NavbarLeftButtonsContainerDiv = styled.div`
    display: flex;
    width: 350px;
    margin-left: 30px;
    justify-content: space-between;
`;

export const NavbarLeftTabsDiv = styled.span`
    display: flex;
    justify-content: center;
    *{
    background: none;
    cursor: pointer;
    color: #1E1E1E;
    border: none;
    height: 30px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    }
`;

export const NavbarRightButtonsContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto 20px auto auto;
    max-width: 50%;
    min-width: 10%;
`;

export const NavbarRightTabsDiv = styled.div`
    display: flex;
    justify-content: center;
    *{
    cursor: pointer;
    color: #1E1E1E;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    }
    &:first-child{
    background-color: #FFFFFF;
    border: 3px solid #DABC39;
    border-radius: 15px;
    font-weight: 400;
    width: 139px;
    height: 60px;
    align-items: center;
    margin-right: 10px;
    }
    &:not(:first-child):not(:last-child){
    border: 1.5px solid #DABC39;
    width: 0;
    height: 60px;
    }
    &:last-child{
    border: none;  
    width: 100px;
    height: 60px;
    align-items: center;
    }
`;


