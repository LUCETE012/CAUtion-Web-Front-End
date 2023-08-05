import React from "react";
import styled from "styled-components";
import profileimg from "./profile.png"
import giticon from "./git.png"
const ManageWrapper=styled.div`
    width:170px;
    height:300px;
    padding:10px;
    justify-content:center;
    margin-left:20px;
    margin-right:20px;
`

const ProfileImg=styled.img`
    width:150px;
    border-radius:10px;
`
const PositionWrapper=styled.div`
    font-size:20px;
    text-align:center;
    justify-content:center;
    font-family: 'Do Hyeon', sans-serif;
`
const NameWrapper=styled.div`
    font-size:20px;
    font-weight:bold; 
    letter-spacing:2px;
    text-align:center;
    font-family: 'Do Hyeon', sans-serif;
`
const Gitimg=styled.img`
    width:30px;
`

const NameContainer=styled.div`
    padding:10px;
   
`


const ManageCard =({profimg=profileimg,positions='2기 회장',name="22학번 민윤기",gitlink="https://github.com/lims00"})=>{
    return(
        <ManageWrapper>
            <ProfileImg src={profimg}></ProfileImg>
            <NameContainer>
                <PositionWrapper>{positions} </PositionWrapper>
                <NameWrapper>{name}</NameWrapper>
                <a href={gitlink}><Gitimg src={giticon}></Gitimg></a>
            </NameContainer>

        </ManageWrapper>
    );
}

export default ManageCard;