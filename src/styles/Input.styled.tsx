import styled from "styled-components";
import { SearchInputProps } from "../types/props.type";
import { theme } from "../theme/customTheme";

export const CustomSearchInput = styled.input<SearchInputProps>`
  padding: 10px;
  width:300px;
  placeholder
  border:${({border})=> border || '1px solid #ccc'};
  border-radius:${({borderRadius})=> borderRadius || '5px'};
  outline: none;
  color:white;
  transition: border-color 0.3s ease;
  background:${({theme})=>theme.colors.lightWhite};
  &:focus {
    border-color: #007bff;
  }
  @media (max-width: 576px) {
  width:130px;
  padding:5px;

  }
  ${({customStyles})=>customStyles && customStyles}
`;

export interface InputWithLabelProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}