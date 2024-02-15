import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme/customTheme';
interface ProgressBarProps {
  value?: number;
  max?: number;
  onChange?: (newValue: number) => void;
}

const StyledProgressBar = styled.progress`
width: 100px;
  height: 6px;
  appearance: none;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  outline: none;
  width:100%;
  display:flex;
  aligh-items:center;
 
  &::-webkit-progress-bar {
    background-color: #f0f0f0;
    border-radius: 5px;
  }

  &::-webkit-progress-value {
    background-color: ${({theme})=>theme.colors.secondary}; /* Change this to customize the progress color */
    border-radius: 0px;
  }
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, onChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleClick = (event: React.MouseEvent<HTMLProgressElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const barWidth = rect.width;
    const percentage = (clickX / barWidth) * 100;
    onChange && onChange(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLProgressElement>) => {
    if (isDragging) {
      handleClick(event);
    }
  };

  return (
    <StyledProgressBar
      value={value}
      max={max}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    ></StyledProgressBar>
  );
};

export default ProgressBar;
