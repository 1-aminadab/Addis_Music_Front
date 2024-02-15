import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../types/data.type';
import { SongStatistics } from '../../types/data.type';
import { SongsState } from '../../types/data.type';

const initialState: SongsState = {
  userData: { userName: "amanuel" },
  songs: [],
  currentSong: [],
  currentBody: 'home',
  songFiltered: false,
  openSidebar: false,
  addSong: false,
  currentPlaying: null,
  updateSong: false,
  songStatistics: undefined,
  dataTobeUpdated: {}
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    loadAllSongs(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.currentSong = action.payload;
    },
    loadStatistics(state, action: PayloadAction<SongStatistics>) {
      state.songStatistics = action.payload;
    },
    setCurrentBody(state, action: PayloadAction<string>) {
      state.currentSong = state.songs;
      state.currentBody = action.payload;
    },
    openAddSong(state, action: PayloadAction<boolean>) {
      state.addSong = action.payload;
    },
    openUpdateSong(state, action: PayloadAction<boolean>) {
      state.updateSong = action.payload;
    },
    filterCurrentSongs(state, action: PayloadAction<Partial<Song>>) {
      const filters = action.payload;
      state.currentSong = state.songs.filter(item => {
        return Object.keys(filters).every(key => {
          if (key === "isFavorite") {
            return filters[key as keyof Song] ? item[key] : true;
          } else {
            return item[key as keyof Song] === filters[key as keyof Song];
          }
        });
      });
    },
    updateSong(state, action: PayloadAction<Partial<Song>>) {
      const updatedSong = action.payload;
      state.currentSong = state.songs.map(song => {
        if (song._id === updatedSong._id) {
          return { ...song, ...updatedSong };
        } else {
          return song;
        }
      });
    },
    addSong(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.currentSong.push(action.payload);
    },
    deleteSong(state, action: PayloadAction<string>) {
      const deletedId = action.payload
      state.currentSong = state.currentSong.filter((item) => {
        return item._id !== deletedId
      })
    },
    loadUpdateData(state, action: PayloadAction<Song>) {
      state.dataTobeUpdated = action.payload

    },
    toggleFilteredSong(state, action: PayloadAction<boolean>) {
      state.songFiltered = action.payload

    },
    setCurrentSong(state, action: PayloadAction<Song>) {
      state.currentPlaying = action.payload

    },
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.openSidebar = action.payload
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      // const songId = action.payload;
      // const index = state.currentSong.findIndex(song => song._id === songId);
      // if (index !== -1) {
      //   const updatedSong = { ...state.currentSong[index], isFavorite: !state.currentSong[index].isFavorite };
      //   state.currentSong[index] = updatedSong;
      // }
    }
  },
});

export const {
  filterCurrentSongs,
  loadAllSongs,
  setCurrentBody,
  openAddSong,
  openUpdateSong,
  loadStatistics,
  updateSong,
  addSong,
  deleteSong,
  toggleFilteredSong,
  loadUpdateData,
  setCurrentSong,
  toggleSidebar,
  toggleFavorite
} = songsSlice.actions;

export default songsSlice.reducer;