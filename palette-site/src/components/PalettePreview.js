// PalettePreview.js
import React from 'react';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: 50px;
  margin: 5px;
  margin-left: 17%;
`;

const PreviewColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
`;

const PalettePreview = ({ palette }) => {
  return (
    <PreviewWrapper>
      {palette.colors.map((color, index) => (
        <PreviewColor key={index} color={color.color} />
      ))}
    </PreviewWrapper>
  );
};

export default PalettePreview;
