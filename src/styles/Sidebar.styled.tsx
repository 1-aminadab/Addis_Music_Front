import styled from "styled-components";
import { theme } from "../theme/customTheme";

export const SideBar = styled.div<{openSidebar:boolean}>`
    width: 250px;
    height: 100vh;
    overflow-y:scroll;
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    @media (max-width: 576px) {
        width: 100vw;
        padding: 10px;
        position: absolute;
        background-color: ${({theme}) => theme.colors.secondaryBackground};
        z-index: 10;
        transition: transform 400ms ease-in-out; /* Added transition property */
        transform: translateX(${({openSidebar}) => openSidebar ? '0' : '-100%'});
    }
`;
