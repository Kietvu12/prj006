import React, { useContext, useState } from 'react';
import { ImageBackground } from 'react-native';
import { ThemeContext } from './ThemeContext';
import dataBg from '../data/dataBg';
import ImageList from './ImageList';
 

const Mood = () => {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0];

  const updateTheme = () => {
    setSelectedTheme(defaultTheme);
  };

  return (
    <ImageBackground source={selectedTheme} style={{   
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }} 
    resizeMode='cover'>
      {/* Render the list of images here */}
      <ImageList />
    </ImageBackground>
  );
};

export default Mood;