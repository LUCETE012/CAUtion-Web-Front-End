import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';

const NavContainer = styled.div`
  height: 90px;
  width: 100%;
  background-color: #00b992;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; 

  @media (max-width: 836px) {
    flex-direction: column;
    padding: 20px;
   
  }
`;

const RecruitBtn = styled.button`
  background-color: white;
  width: 140px;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Do Hyeon', sans-serif;
  color: #00b992;
  margin-left: 20px;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 836px) {
    margin: 10px 0;
    width: 100%;
    display: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px;

  @media (max-width: 836px) {
    margin: 0;
  }
`;

const LogoImg = styled.img`
  width: 230px;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 170px;

  @media (max-width: 836px) {
    margin: 0;
    justify-content: space-between;
    width: 80%;
    
  }
`;

const NavLinkTab = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-family: 'Do Hyeon', sans-serif;
  font-size: 24px;
  font-weight: 500;
  padding: 0 15px;
  margin: 0 10px; 
  transition: all 0.3s ease;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 836px) {
    font-size: 24px;
    padding: 0 10px;
    margin:0;
  }
`;

const Nav = () => {
    const activeStyle= {
        'color': '#FFD654'
    };

    return (
        <NavContainer>
            <LogoContainer>
                <Link to='/'>
                    <LogoImg src='img/CAUtion_logo.png' alt='CAUtion_logo' />
                </Link>
            </LogoContainer>

            <NavLinkContainer>
                <NavLinkTab style={({isActive})=>(isActive?activeStyle:{})} to='/management'>Management</NavLinkTab>
                <NavLinkTab style={({isActive})=>(isActive?activeStyle:{})} to='/study'>Study</NavLinkTab>
                <NavLinkTab style={({isActive})=>(isActive?activeStyle:{})} to='/activity'>Activity</NavLinkTab>
                <a href="https://github.com">
                    <RecruitBtn>
                        Recruit <FiArrowRight />
                    </RecruitBtn>
                </a>
            </NavLinkContainer>
        </NavContainer>
    );
};

export default Nav;
