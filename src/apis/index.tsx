import axios from "axios";
import { Song, UserData } from "../types/data.type";

axios.defaults.baseURL = 'http://localhost:3000'


export const getSongsAPI = async (username:string) => await axios.get(`/songs/${username}`)
export const getStatisticsAPI = async (username:string) => await axios.get(`/songs/stat/${username}`)
export const addSongAPI = async (song: Song) => await axios.post('/songs', song)
export const deleteSongAPI = async (id: string) => await axios.delete(`/songs/${id}`)
export const updateSongAPI = async (song: Song) => await axios.put(`/songs/${song._id}`, song)
export const toggleFavoriteAPI = async (id: string) => await axios.patch(`songs/${id}/toggle-favorite`)

// user api
export const userLogin = async (userData:UserData) =>{return await axios.post('/users/login',userData)}
export const userSignup = async (userData:UserData) =>{ return await axios.post('/users/signup',userData)}
