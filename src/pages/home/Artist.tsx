import { ArtistsComponent } from "../../components/cards/ArtistCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterCurrentSongs, toggleFilteredSong } from "../../store/features/musicSlice";
import { RootState } from "../../store/store";
import { ListContainer } from "../../styles/card.styled";
import { theme } from "../../theme/customTheme";
export const ArtistsList:any = ()=>{
    const {songStatistics} = useSelector((store: RootState) => store.songs);
    const dispatch = useDispatch()
    // console.log(songStatistics.artistSongCounts)
    interface propStyle {
        color:string;
    }
const Header = styled.h1<propStyle>`
    color:${({color})=> color};
    font-weight:700;
    background-color:${theme.colors.primary}
    `
    return (
        < ListContainer>{
            songStatistics && songStatistics.artistSongCounts.map((item:any)=>{
                console.log(item);
               <Header color="red">Hello world</Header>
            
                
            return(
                <ArtistsComponent onClick={()=>{
                    dispatch(filterCurrentSongs({artist:item._id}))
                    dispatch(toggleFilteredSong(true))}} artist={item}/>
            )
        })}
        </ListContainer>
    )
}