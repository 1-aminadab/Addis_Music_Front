import styled from "styled-components";
import { CustomSideBar } from "../../components/bars/sidebar/SideBar";
import { theme } from "../../theme/customTheme";
import { CustomNavbar } from "../../components/bars/navbar/NavBar";
import { MusicCard } from "../../styles/card.styled";
import { MusicCardComponent } from "../../components/cards/MusicCard";
import { CustomMusicController } from "./MusicController";
import AddCard from "../../components/cards/AddMusic";
import { useSelector } from "react-redux";
import { ArtistsList } from "./Artist";
import { GenreList } from "./Genre";
import { AlbumList } from "./Album";
import UpdateCard from "../../components/cards/UpdateMusic";
import { useEffect } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { LoadingState, loadAllSongs, loadStatistics} from "../../store/features/musicSlice";
import { Song, UserData } from "../../types/data.type";
import { MusicContainer } from "./ProductList";
import { GET_ALL_SONGS, GET_STATISTICS } from "../../types/redux.type";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflowx: hidden;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

const Body = styled.div`
  display: flex;
  padding:10px;
  height: calc(
    100vh - ${theme.sizes.navbarHeight} - ${theme.sizes.controllerHeight}
  );
  overflow-y:scroll;
`;

export const CustomHome = () => {

  const userDataString = localStorage.getItem('userData');
  const userData: UserData = userDataString ? JSON.parse(userDataString) : null

  const { currentBody,addSong, updateSong, currentSong,songFiltered} = useSelector((store: RootState) => store.songs);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  useEffect(()=>{
    dispatch({type:GET_ALL_SONGS, username:userData.username})
    dispatch({type:GET_STATISTICS, username:userData.username})
  },[])

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      navigate("/auth");
    }
  }, []);
  return (
    <Home>
      <CustomSideBar />
      <div style={{ width: "100%", overflow: "hidden" }}>
        {addSong &&<AddCard /> }
        {updateSong && <UpdateCard/>}
        <CustomNavbar />
        {
          currentSong.length !== 0 ?
          <Body>
            {currentBody.toLowerCase() === "artist" && (songFiltered ? <MusicContainer songs={currentSong}/> :<ArtistsList/>)}
            {currentBody.toLowerCase() === "genre" &&   (songFiltered ?  <MusicContainer songs={currentSong}/> :<GenreList/>) }
            {currentBody.toLowerCase() === "album" && (songFiltered ? <MusicContainer songs={currentSong}/> : <AlbumList/>)}
            {currentBody.split(" ")[0].toLowerCase() === "recent" && (<div>Recent</div>)}
            {currentBody.toLowerCase() === "favorite" && <MusicContainer songs={currentSong}/>}
            {currentBody.toLowerCase() === "home" && <MusicContainer songs={currentSong}/>}
  
          </Body> :<Header/>
          
        }
       
        <CustomMusicController />
      </div>
    </Home>
  );
};
const HeaderContainer = styled.header`
  color: #fff;
  padding: 20px;
  text-align: center;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1 style={{fontSize:'500%',color:theme.colors.lightWhite}}>Empty playlist.</h1>
    </HeaderContainer>
  );
};