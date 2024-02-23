import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../types/data.type';
import { SongStatistics } from '../../types/data.type';
import { SongsState } from '../../types/data.type';

const initialState: SongsState = {
  userData: { userName: "amanuel" },
  songs: [],
  currentSong: [],
  recentSongs:[],
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
      console.log("toggle id", id);
      
      const songs = state.currentSong
      const songIndex = songs.findIndex(song => song._id === id);
    // If the song with the given ID is found
    if (songIndex !== -1) {
        // Toggle the favorite property of the song
        state.currentSong[songIndex].isFavorite = !songs[songIndex].isFavorite;
        // Print the updated list of songs
        console.log("Updated Songs:", songs);
    } else {
        console.log("Song with ID", id, "not found.");
    }

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
    },
    addRecentSongs(state,aciton: PayloadAction<Song>){
      const song= aciton.payload
      const recentSongs = state.recentSongs
      const existingIndex = recentSongs.findIndex(music => music._id === song._id);
    if (existingIndex !== -1) {
        // Remove the existing music from the array
        state.recentSongs.splice(existingIndex, 1);
    }
    // Add the new music to the beginning of the array
    state.recentSongs.unshift(song);
   
    },
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
  LoadingState,
  addRecentSongs
} = songsSlice.actions;

export default songsSlice.reducer;