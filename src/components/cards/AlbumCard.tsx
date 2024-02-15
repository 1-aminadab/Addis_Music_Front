import styled from "styled-components";
import { CustomImage } from "../images/CustomImage";
import AlbumImage from '../../assets/album-image.svg'
import { CustomHeader } from "../texts/Headers";
import { theme } from "../../theme/customTheme";
import { Statistics } from "../../styles/Statistics.styled";

export const AlbumComponent:React.FC<any> = ({album,onClick})=>{

    return (
        <Statistics onClick={onClick}>
        <CustomImage  src={AlbumImage} width="50px"/>
        <div >
            <CustomHeader color="white" size="large">
            {album?._id.album}
            </CustomHeader>
            <div style={{display:"flex", alignItems:"center",gap:10}}>
            <CustomHeader size="small" color="white">
                Songs
            </CustomHeader>
            <CustomHeader size="small" color="white">
               {album.count}
            </CustomHeader>
            </div>
        </div>
        </Statistics>
    )
}