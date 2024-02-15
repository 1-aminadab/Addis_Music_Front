import styled from "styled-components"
import { theme } from "../theme/customTheme"

export const Statistics = styled.div`
height:60px;
width:300px;
display:flex;
flex-wrap:wrap;
cursor:pointer;
border-radius:10px;
transition:all 300ms;
background-color:${theme.colors.primary + '55'};
&:hover {
    background-color:${theme.colors.lightWhite};

}
`