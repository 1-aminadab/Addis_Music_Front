import { MusicCardComponent } from "../../components/cards/MusicCard"
import { theme } from "../../theme/customTheme";
import { Song } from "../../types/data.type";


import React from 'react';
import styled from 'styled-components';

const MusicContainerWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.sizes.navbarHeight} - ${({ theme }) => theme.sizes.controllerHeight});
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
  }
`;

interface MusicContainerProps {
  songs: Song[];
}

const MusicContainer: React.FC<MusicContainerProps> = ({ songs }) => {
  return (
    <MusicContainerWrapper>
      {songs.map((song: Song) => (
        <MusicCardComponent key={song._id} song={song} />
      ))}
    </MusicContainerWrapper>
  );
};

export default MusicContainer;
