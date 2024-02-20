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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const [openLogout, setOpenLogout] = useState(false)
  
  useEffect(()=>{
  dispatch(filterSongsBySearch(search))
  },[search])
  useEffect(()=>{
  console.log(openLogout);
  },[openLogout])
 const Logout = ()=>{
  localStorage.removeItem('userData');
  navigate('/auth')
 }
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
        
        onClick={()=>setOpenLogout(!openLogout)}
        backgroundColor={theme.colors.lightWhite}
        hoverBackgroundColor={theme.colors.secondaryBackground}
        borderRadius="40px"
        padding="5px 10px"
        width="fit-content"
        customStyles={"align-items:center; position:relative; justify-content:center"}
       
      >
        <AccountCircleOutlinedIcon fontSize="large" sx={{}} />
        <CustomHeader size="small" color={theme.colors.white}>
          Aman
        </CustomHeader>
        <KeyboardArrowDownIcon />
        {
           openLogout &&   <div onClick={Logout} style={{ 
                    
                        transition:"all 500ms",
                        position:"absolute",left:"0",top:"100%",width:"100%",borderTop:"1px solid #fff7",background:`${theme.colors.lightWhite}`, padding:"10px"}}>
                        <h1 style={{fontWeight:"bold"}}>Logout</h1>
                      </div>
        }
       
      </CustomButton>
    </Navbar>
  );
};
