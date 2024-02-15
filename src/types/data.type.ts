export interface Song {
    _id?: string;
    createdBy: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    isFavorite?: boolean;
    __v?: number;
  }

export interface SongStatistics {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    genreCounts: { _id: string; count: number }[];
    artistAlbumCounts: { _id: { artist: string; album: string }; count: number }[];
    albumSongCounts: { _id: string; count: number }[];
    genreSongCounts: { _id: string; count: number }[];
    artistSongCounts: { _id: string; count: number }[];
    favoriteSongsCount: number;
    totalUniqueArtistsWithMultipleAlbums: number;
    totalUniqueGenresWithMultipleSongs: number;
  }
  
  
  // Initial state
  export interface SongsState {
    userData:Object;
    songs: Song[];
    currentSong:Song[];
    currentBody:string;
    currentPlaying:Song | null;
    addSong:boolean;
    openSidebar:boolean;
    songFiltered:boolean;
    updateSong:boolean;
    songStatistics?:SongStatistics;
    dataTobeUpdated:Partial<Song> ;
  }