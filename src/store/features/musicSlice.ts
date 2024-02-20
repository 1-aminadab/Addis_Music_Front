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
  dataTobeUpdated: {},
  searchCars:"",
  isLoading:false
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
      console.log("Updated song",action.payload);     
      const updatedSong = action.payload;
      state.currentSong = state.currentSong.map(song => {
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
    deleteSong(state, action: PayloadAction<string | undefined>) {
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
      const id = action.payload
      console.log("Favorite id ",id);
      
     const updatedSongs  = state.currentSong.map(item => {
        if (item._id === id) {
          console.log("here it goose");
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      });
      console.log(updatedSongs);
      
    state.currentSong = updatedSongs


    },
    filterSongsBySearch(state,  action: PayloadAction<string>){
      const songs  = state.songs
      const searchChars = action.payload.toLowerCase()
      state.currentSong = songs.filter((song)=>{

        return song.title.toLowerCase().includes(searchChars) || 
        song.artist.toLowerCase().includes(searchChars) || song.title.toLowerCase().includes(searchChars)
      })
    },
    LoadingState(state,aciton: PayloadAction<boolean>){
      state.isLoading = aciton.payload
    }
  },
});

export const {
  filterCurrentSongs,
  filterSongsBySearch,
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
  toggleFavorite,
  LoadingState
} = songsSlice.actions;

export default songsSlice.reducer;