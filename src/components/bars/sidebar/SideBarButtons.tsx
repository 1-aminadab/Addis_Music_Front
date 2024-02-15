import { ReactNode } from "react";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
interface SideBarButtonContent {
    icon: (color:string)=> ReactNode;
    title: string;
    type:string;
  }

export const sidebarButtonContent: SideBarButtonContent[] = [
    {
        icon: (color) => <CottageOutlinedIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Home",
        type: "regular"
      },
      {
        icon: (color) => <GridViewIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Genre",
        type: "regular"
      },
      {
        icon: (color) => <PersonIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Artist",
        type: "regular"
      },
      {
        icon: (color) => <LibraryMusicOutlinedIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Album",
        type: "regular"
      },
      {
        icon: (color) => <FavoriteBorderOutlinedIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Favorite",
        type: "special"
      },
      {
        icon: (color) => <MusicNoteOutlinedIcon sx={{ color: `${color}` }} fontSize="medium" />,
        title: "Recent Played",
        type: "special"
      },
    ];