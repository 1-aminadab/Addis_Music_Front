import { ArtistsComponent } from "../../components/cards/ArtistCard";
import styled from "styled-components";
import { GenreComponent } from "../../components/cards/GenreCar";
import { useSelector, useDispatch } from "react-redux";
import { filterCurrentSongs, toggleFilteredSong } from "../../store/features/musicSlice";
import { RootState } from "../../store/store";
const ListContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:10px;
overflow-X:scroll;
`
export const GenreList:any = ()=>{
    const {songStatistics} = useSelector((store: RootState) => store.songs);
    const dispatch = useDispatch()
    return (
        < ListContainer>{
       songStatistics.genreSongCounts.map((item:any)=>{
            return(
                <GenreComponent  onClick={()=>{
                    dispatch(filterCurrentSongs({genre:item._id}))
                    dispatch(toggleFilteredSong(true))}}  genre={item}/>
            )
        })}
        </ListContainer>
    )
}