import styled from "styled-components";
import { SideBar } from "../../../styles/Sidebar.styled";
import CustomButton from "../../buttons/CustomButton";
import { CustomImage } from "../../images/CustomImage";
import LightLogo from "../../../assets/light-logo.png";
import { theme } from "../../../theme/customTheme";
import { CustomHeader } from "../../texts/Headers";
import { ReactNode, useState } from "react";
import { sidebarButtonContent } from "./SideBarButtons";
import { useDispatch, useSelector } from "react-redux";
import { filterCurrentSongs, setCurrentBody, toggleFilteredSong, toggleSidebar } from "../../../store/features/musicSlice";
import AddIcon from '@mui/icons-material/Add';
import { openAddSong } from "../../../store/features/musicSlice";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const color = theme.colors;

const CloseButton = styled.div`
display:none;
@media (max-width: 576px) {
display:flex;
position:absolute;
top:10%;
left:90%;
cursor:pointer;
}
`

export const CustomSideBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const {openSidebar} = useSelector((store:any)=> store.songs)
    const setIndex = (index:number)=>{
        setCurrentIndex(index)
    }
    const dispatch = useDispatch()
    
  return (
    <SideBar openSidebar={openSidebar}>
      <CustomImage
        src={LightLogo}
        alt="light logog"
        width="70%"
        padding="20px 0 80px 10px"
      />
      <CloseButton onClick={()=>dispatch(toggleSidebar(false))} >
      <KeyboardBackspaceIcon sx={{color:"white"}}/>

      </CloseButton>
      
     <div style={{ display: 'flex',flexGrow:1,flexDirection: 'column', gap: '10px', overflowY:"scroll" }}>
        <div>

          {sidebarButtonContent.map((button, index) => {
            if (button.type === 'regular') {
              const active = currentIndex === index;
              return (
                <CustomButton
                  key={index}
                  width="100%"
                  padding="13px 23px"
                  backgroundColor="none"
                  hoverBackgroundColor={theme.colors.lightWhite}
                  gap="20px"
                  customStyles={active ? `border-left:4px solid ${theme.colors.primary}` : ''}
                  onClick={() => {
                   
                      dispatch(toggleSidebar(false))
                    
                    setIndex(index)
                    dispatch(setCurrentBody(button.title))
                    dispatch(toggleFilteredSong(false))
                  }}
                >
                  {button.icon(active ? color.primary : color.white)}
                  <CustomHeader size="medium" color={active ? color.primary : color.white} weight="400">
                    {button.title}
                  </CustomHeader>
                </CustomButton>
              );
            }
            return null;
          })}
        </div>
        <div>
          <br />
          <div style={{display:"flex",alignItems:"center", padding:"0 10px", gap:"10px"}}>
          <CustomHeader color="gray">Add new Song</CustomHeader>
          <CustomButton onClick={()=>{dispatch(toggleSidebar(false))
          dispatch(openAddSong(true))
          }} backgroundColor={theme.colors.primary} padding="8px" borderRadius="10px" >
          <AddIcon sx={{}}/>
          </CustomButton>
          </div>
          <br />
          {sidebarButtonContent.map((button, index) => {
            if (button.type === 'special') {
              const active = currentIndex === index;
              return (
                <CustomButton
                  key={index}
                  width="100%"
                  padding="13px 23px"
                  backgroundColor="none"
                  hoverBackgroundColor={theme.colors.lightWhite}
                  gap="20px"
                  customStyles={active ? `border-left:4px solid ${theme.colors.primary}` : ''}
                  onClick={() => {
                    setIndex(index)
                    dispatch(toggleSidebar(false))
                    dispatch(setCurrentBody(button.title))
                    dispatch(toggleFilteredSong(false))
                    dispatch(filterCurrentSongs({isFavorite:true}))
                  }}                >
                  {button.icon(active ? color.primary : color.white)}
                  <CustomHeader size="medium" color={active ? color.primary : color.white} weight="400">
                    {button.title}
                  </CustomHeader>
                </CustomButton>
              );
            }
            return null;
          })}
        </div>
      </div>
    </SideBar>
  );
};
