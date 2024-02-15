import styled from "styled-components";
import CustomButton from "../components/buttons/CustomButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProgressBar from "./ProgressBar";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { SongsState } from "../types/data.type";
import SampleMusic from '../assets/sample-audio.mp3';
import { theme } from "../theme/customTheme";
import { CustomImage } from "../components/images/CustomImage";
import { CustomHeader } from "../components/texts/Headers";
const MusicController = styled.div<{ isPlaying: boolean }>`
  height: ${({ theme }) => theme.sizes.controllerHeight};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  display: ${({ isPlaying }) => (isPlaying ? "flex" : "none")};
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;
  position:relative;
`;

const TimeController = styled.div`
 position:absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:10px;
  
 left:0;
 width:100%;
  top:0;
  height:10px;
  padding:4px 5px;
`;

const TimeInfo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size:12px;
`;

const TimeBarContainer = styled.div`
  top:0;
  left:0;
  flex-grow:1;
  cursor:pointer;
`;

const VolumeController = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
  width:130px
`;

const VolumeBar = styled(ProgressBar)`
  flex-grow: 1;
`;

export const CustomMusicController = () => {
  const { currentPlaying } = useSelector((store: any) => store.songs);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [progress, setProgress] = useState(0);
  const [soundOff, setSoundOff] = useState(false);
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);


  useEffect
  const handleChange = (newValue: number) => {
    setProgress(newValue);
    if (audioRef.current) {
      audioRef.current.currentTime = (newValue / 100) * audioRef.current.duration;
    }
  };
  
  const handlePlayPause = () => {
    setPlay(!play);
    if (audioRef.current) {
      if (play) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };
  const [volume, setVolume] = useState(50);

  const handleAudioChange = (newValue: number) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue / 100;
    }
  };
  
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  useEffect(()=>{
   if(progress >=99){
    setProgress(0)
    audioRef.current?.pause()
   setPlay(false)
   }
  },[progress])
  return (
    <MusicController isPlaying={currentPlaying !== null}>
      <audio src={SampleMusic} ref={audioRef} onTimeUpdate={() => setProgress((audioRef.current?.currentTime / audioRef.current?.duration) * 100)} />
      {/* 
       */}
        <div style={{ display: "flex", gap: "10px" }}>
        <CustomImage
          src={
            "https://cdn.dribbble.com/users/4176757/screenshots/15374132/media/ba5e1f842199176477e2c1bb82f672c1.jpg?resize=320x240&vertical=center"
          }
          width="35px"
        />
        <div>
          <CustomHeader size="small" color="white">
          {
            currentPlaying?.title
          }
          </CustomHeader>
          <CustomHeader size="small" color="gray">
            {
              currentPlaying?.artist
            }
          </CustomHeader>
        </div>
         <div style={{ display: "flex", gap: "10px" }}>
        <CustomButton onClick={() => setToggleFavorite(!toggleFavorite)} backgroundColor="none" color="#f22" hoverTextColor="#f22">
          {toggleFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </CustomButton>
      </div>
        </div>
       {/* 
        */}
     

      <div style={{ display: "flex", gap: "2px" }}>
        <CustomButton
          shape="circle"
          backgroundColor={theme.colors.lightWhite}
          hoverTextColor={theme.colors.primary}
          onClick={() => handlePlayPause()}
        >
          {play ? <PauseIcon /> : <PlayArrowIcon />}
        </CustomButton>
        <CustomButton
          shape="circle"
          backgroundColor="none"
          hoverTextColor={theme.colors.primary}
        >
          <SkipNextIcon />
        </CustomButton>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>  
        <VolumeController>
          <CustomButton
            shape="circle"
            backgroundColor="none"
            hoverTextColor={theme.colors.primary}
            onClick={() => setSoundOff(!soundOff)}
          >
            {soundOff && <VolumeOffIcon />}
            {!soundOff && volume >= 80 && <VolumeUpIcon />}
            {!soundOff && volume >= 30 && volume < 80 && <VolumeDownIcon />}
            {!soundOff && volume < 30 && <VolumeMuteIcon />}
          </CustomButton>
          <VolumeBar value={volume} max={100} onChange={handleAudioChange} />
        </VolumeController>
      </div>

      <TimeController>
        <TimeInfo>{formatTime(audioRef.current?.currentTime || 0)}</TimeInfo>
        <TimeBarContainer>
          <ProgressBar value={progress} max={100} onChange={handleChange} />
        </TimeBarContainer>
        <TimeInfo>-{formatTime(audioRef.current?.duration - (audioRef.current?.currentTime || 0))}</TimeInfo>
      </TimeController>
    </MusicController>
  );
};
