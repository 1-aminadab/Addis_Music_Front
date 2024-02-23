import { ReactNode } from "react";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export interface SideBarButtonContent {
    icon: (color:string)=> ReactNode;
    title: string;
    type:string;
    total?:number;
  }
import { RootState, store } from "../../../store/store";
const {songs} = store.getState()
const favorites = songs.songs.filter((song)=>{
  return song.isFavorite === true
})
const totalFavorite = favorites.length
const totalRecents = songs.recentSongs.length
const stat = songs.songStatistics
console.log(songs.songStatistics);

export const sidebarButtonContent: SideBarButtonContent[] = [
    {
        icon: (color) => <CottageOutlinedIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Home",
        type: "regular",
        total:stat?.totalSongs
      },
      {
        icon: (color) => <GridViewIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Genre",
        type: "regular",
        total:stat?.totalGenres
        
      },
      {
        icon: (color) => <PersonIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Artist",
        type: "regular",
        total:stat?.totalArtists
      },
      {
        icon: (color) => <LibraryMusicOutlinedIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Album",
        type: "regular",
        total:stat?.totalAlbums
      },
      {
        icon: (color) => <FavoriteBorderOutlinedIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Favorite",
        type: "special",
        total:totalFavorite
      },
      {
        icon: (color) => <MusicNoteOutlinedIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Recent Played",
        type: "special",
        total:totalRecents
      },
    ];