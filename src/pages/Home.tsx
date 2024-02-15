import styled from "styled-components";
import { CustomSideBar } from "../components/bars/sidebar/SideBar";
import { theme } from "../theme/customTheme";
import { CustomNavbar } from "../components/bars/navbar/NavBar";
import { MusicCard } from "../styles/card.styled";
import { MusicCardComponent } from "../components/cards/MusicCard";
import { CustomMusicController } from "./MusicController";
import AddCard from "../components/cards/AddMusic";
import { useSelector } from "react-redux";
import { ArtistsList } from "./Artist";
import { GenreList } from "./Genre";
import { AlbumList } from "./Album";
import UpdateCard from "../components/cards/UpdateMusic";
import { useEffect } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { loadAllSongs, loadStatistics} from "../store/features/musicSlice";
import { Song } from "../types/data.type";
import { MusicContainer } from "./ProductList";

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
`;

export const CustomHome = () => {
  const { currentBody,addSong, updateSong, songs,currentSong,songFiltered} = useSelector((store: any) => store.songs);
  const dispatch = useDispatch()
  useEffect(()=>{
    const allSongs = getAllSongs()
    const stats = getStat()


  },[])
  const getAllSongs = async()=>{
    await axios.get('http://localhost:3000/songs')
    .then((res)=>{
      dispatch(loadAllSongs(res.data))})
    .catch((error)=>console.log(error))
  }
  const getStat = async()=>{
    await axios.get('http://localhost:3000/songs/stat')
    .then((res)=>{
      dispatch(loadStatistics(res.data))})
    .catch((error)=>console.log(error))
  }


  return (
    <Home>
      <CustomSideBar />
      <div style={{ width: "100%", overflow: "hidden" }}>
        {addSong &&<AddCard /> }
        {updateSong && <UpdateCard/>}
        <CustomNavbar />
        <Body>
          {currentBody.toLowerCase() === "artist" && (songFiltered ? <MusicContainer songs={currentSong}/> :<ArtistsList/>)}
          {currentBody.toLowerCase() === "genre" &&   (songFiltered ?  <MusicContainer songs={currentSong}/> :<GenreList/>) }
          {currentBody.toLowerCase() === "album" && (songFiltered ? <MusicContainer songs={currentSong}/> : <AlbumList/>)}
          {currentBody.split(" ")[0].toLowerCase() === "recent" && (<div>Recent</div>)}
          {currentBody.toLowerCase() === "favorite" && <MusicContainer songs={currentSong}/>}
          {currentBody.toLowerCase() === "home" && <MusicContainer songs={currentSong}/>}
        </Body>
        <CustomMusicController />
      </div>
    </Home>
  );
};