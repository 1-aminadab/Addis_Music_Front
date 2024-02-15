import React from 'react';
import styled from 'styled-components';
import { Header } from '../../styles/Header.styled';
import { InputWithLabelProps } from '../../styles/Input.styled';
// Define types for props


// Styled components for the input with label
const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background:none;
  color:white;
`;

// Functional component for the Input with Label
const InputLabel: React.FC<InputWithLabelProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputContainer>
      <Header size='small' color='white'>{label}</Header>
      <InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default InputLabel;
