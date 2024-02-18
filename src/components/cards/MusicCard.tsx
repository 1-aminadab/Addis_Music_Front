import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { CustomImage } from "../images/CustomImage";
import { CustomHeader } from "../texts/Headers";
import { MusicCard as StyledMusicCard } from "../../styles/card.styled";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { theme } from "../../theme/customTheme";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../buttons/CustomButton";
import { deleteSong, loadUpdateData, openUpdateSong, setCurrentSong, toggleFavorite, updateSong } from "../../store/features/musicSlice";
import axios from "axios";
import { Song } from "../../types/data.type";
import MusicDisk from '../../assets/music-disk.svg'
import { RotatingElement } from "../../styles/card.styled";
import { DELETE_SONG_BY_ID, TOGGLE_FAVORITE_BY_ID } from "../../types/redux.type";

const CardOptions = styled.div<{ visible:boolean}>`
  display: ${({ visible }) => visible ? "flex" : "none"};
  background-color:${theme.colors.primaryBackground};
  border-radius: 10px;
  z-index:10000;
`;

export const MusicCardComponent:React.FC<{song:Song}>  = ({song}) => {
  const {currentPlaying} = useSelector((store: any) => store.songs);
  const [favorite, setFavorite] = useState(song.isFavorite);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const dispatch = useDispatch()


  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

 

 
  return (
    <StyledMusicCard onClick={()=>{
    dispatch(setCurrentSong(song))
    }}>
     <RotatingElement rotate = {currentPlaying?._id === song._id}>
        <CustomImage
        src={MusicDisk}
        width="100px"
        borderRadius="10px"
      />
     </RotatingElement>
    
      
      <CustomHeader size="small" color="white">
        {song.artist}
      </CustomHeader>
      <div style={{width:"100%",display:"flex", justifyContent:"space-between"}}>
      <IconButton onClick={()=>dispatch({type:TOGGLE_FAVORITE_BY_ID, id:song._id})}>
        <FavoriteIcon color={favorite ? "error" : "action"} />
      </IconButton>
      <CustomHeader animation={true} width={'50px'} size="10px" color="gray" weight="bold">
       {song.title}
      </CustomHeader>
      <IconButton onClick={toggleOptions}>
        <MoreVertIcon />
      </IconButton>
      </div>
      <CardOptions visible={optionsVisible}>
        <CustomButton customStyles={'border-right:1px solid #fff3'} backgroundColor={theme.colors.secondaryBackground} onClick={()=>{
          dispatch(loadUpdateData(song))
          dispatch(openUpdateSong(true))}}>
         Update
        </CustomButton>
        <CustomButton backgroundColor="none" onClick={()=>dispatch({type:DELETE_SONG_BY_ID, id:song._id})}>
          <DeleteIcon sx={{color:"white"}}/>
        </CustomButton>
      </CardOptions>
     
      
    </StyledMusicCard>
  );
};
