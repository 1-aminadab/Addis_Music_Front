import styled from "styled-components";
import { theme } from "../../../theme/customTheme";
import { CustomSearchInput, NavSearchInput } from "../../../styles/Input.styled";
import CustomButton from "../../buttons/CustomButton";
import { CustomImage } from "../../images/CustomImage";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CustomHeader } from "../../texts/Headers";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useDispatch } from "react-redux";
import { filterSongsBySearch, toggleSidebar } from "../../../store/features/musicSlice";
import LightLogo from "../../../assets/light-logo.png";
import { SearchInput } from "../../inputs/SearchInput";
import { useEffect, useState } from "react";

export const Navbar = styled.div`
  height: ${({ theme }) => theme.sizes.navbarHeight};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondaryBack};
`;
 const OpenButton = styled.div`
 display:none;
 @media (max-width: 576px) {
 display:flex;
 cursor:pointer;
}
 `
export const CustomNavbar = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  useEffect(()=>{
  dispatch(filterSongsBySearch(search))
  },[search])
  return (
    <Navbar>
      
      <OpenButton onClick={()=>dispatch(toggleSidebar(true))}>
        <MenuOpenIcon sx={{color:theme.colors.lightGray,fontSize:"27px"}}/>
      </OpenButton>
      <OpenButton>
         <CustomImage
        src={LightLogo}
        alt="light logog"
        width="100px"
       
      />
      </OpenButton>
     
      <NavSearchInput
        placeholder="Search tracks, albums, artists..."
        border="none"
        borderRadius="40px"
        value = {search}
        onChange = {(e:any)=>setSearch(e.target.value)}
      />
      <CustomButton
        backgroundColor={theme.colors.lightWhite}
        hoverBackgroundColor={theme.colors.secondaryBackground}
        borderRadius="40px"
        padding="5px 10px"
        width="fit-content"
        customStyles={"align-items:center; justify-content:center"}
      >
        <AccountCircleOutlinedIcon fontSize="large" sx={{}} />
        <CustomHeader size="small" color={theme.colors.white}>
          Aman
        </CustomHeader>
        <KeyboardArrowDownIcon />
      </CustomButton>
    </Navbar>
  );
};
