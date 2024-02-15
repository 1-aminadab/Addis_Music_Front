import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputProps } from '../../types/props.type';
import { CustomSearchInput } from '../../styles/Input.styled';
import { SearchOutlined } from '@mui/icons-material';
// Styled input field


// Container for input and icon
const SearchContainer = styled.div`
  position: relative;
  
`;



// Reusable SearchInput component
export const SearchInput:React.FC<SearchInputProps> = ({ placeholder,border,borderRadius,customStyles, ...rest }) => {
  return (
    <SearchContainer>
      <CustomSearchInput border={border} borderRadius={borderRadius} customStyles={customStyles} type="text" placeholder={placeholder} {...rest} />
      <SearchIcon/>
    </SearchContainer>
  );
};
