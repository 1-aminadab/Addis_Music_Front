import axios from "axios";
import { Song } from "../types/data.type";

axios.defaults.baseURL = 'http://localhost:3000'

export const getSongsAPI = async () => await axios.get('/songs')
export const addSongAPI = async (song: Song) => await  axios.post('/song', song)
export const deleteSongAPI = async (id: string) => await  axios.delete(`/songs/${id}`)
export const updateSongAPI = async (song: Song) => await  axios.put(`/songs/${song._id}`, song)
export const toggleFavoriteAPI = async (id: string) => await  axios.patch(`songs/${id}/toggle-favorite`)
export const getStatisticsAPI = async () => await  axios.get('/songs/stat')