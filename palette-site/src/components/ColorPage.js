// ColorPage.js
// ColorPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ColorItem = styled.li`
  width: 50px;
  height: 50px;
  margin: 10px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const SelectedColor = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  text-decoration: none;
`;


const ColorPage = ({ palettes }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const { id } = useParams(); // Get the palette id from the URL
  const palette = palettes.find((p) => p.id === id); // Find the palette by id

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    // Create an audio element with the sound file URL
    let audio = new Audio(color.sound);
    // Play the sound
    audio.play();
  };

  return (
    <ColorWrapper>
      <h2>
        Colors from {palette.paletteName} Palette {palette.emoji}
      </h2>
      <ColorList>
        {palette.colors.map((color, index) => (
          <ColorItem key={index} color={color.color} onClick={() => handleColorSelect(color)} />
        ))}
      </ColorList>
      {selectedColor && <SelectedColor color={selectedColor.color}>Selected Color: {selectedColor.name}</SelectedColor>}
      <Link to="/">Go back to palettes</Link>
    </ColorWrapper>
  );
};

export default ColorPage;
