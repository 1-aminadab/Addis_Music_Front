import { ArtistsComponent } from "../../components/cards/ArtistCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterCurrentSongs, toggleFilteredSong } from "../../store/features/musicSlice";
import { RootState } from "../../store/store";
const ListContainer = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
export const ArtistsList:any = ()=>{
    const {songStatistics} = useSelector((store: RootState) => store.songs);
    const dispatch = useDispatch()
    // console.log(songStatistics.artistSongCounts)
    
    return (
        < ListContainer>{
            songStatistics.artistSongCounts.map((item:any)=>{
                console.log(item);
                
            return(
                <ArtistsComponent onClick={()=>{
                    dispatch(filterCurrentSongs({artist:item._id}))
                    dispatch(toggleFilteredSong(true))}} artist={item}/>
            )
        })}
        </ListContainer>
    )
}