// PaletteComponent.js
// PaletteComponent.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PalettePreview from './PalettePreview.js';

const PaletteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaletteList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaletteItem = styled.li`
  width: 300px;
  height: 200px;
  margin: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

`;

const PaletteName = styled.h3`
  margin: 0;
  font-size: 16px;
  text-decoration: none;
  color: black;
`;

const PaletteEmoji = styled.span`
  font-size: 24px;
  text-decoration: none;
`;

const PaletteComponent = ({ palettes }) => {
  return (
    <PaletteWrapper>
      <h2>Available Palettes</h2>
      <PaletteList>
        {palettes.map((palette, index) => (
          <PaletteItem key={index}>
            <Link to={`/palette/${palette.id}`}>
              <PaletteName >{palette.paletteName}<PaletteEmoji>{palette.emoji}</PaletteEmoji></PaletteName>
              <PalettePreview palette={palette} />
            </Link>
          </PaletteItem>
        ))}
      </PaletteList>
    </PaletteWrapper>
  );
};

export default PaletteComponent;
