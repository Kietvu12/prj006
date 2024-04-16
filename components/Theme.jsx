import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { ThemeContext } from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataBg from '../data/dataBg';

const Theme = () => {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0];
  const [unlockedImages, setUnlockedImages] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const [themeUpdated, setThemeUpdated] = useState(false);

  const handleThemeSelection = (index) => {
    if (unlockedImages.includes(index) || index === 0) {
      setSelectedTheme(dataBg[index]);
    }
  };

  const updateTheme = () => {
    setSelectedTheme(defaultTheme);
    setThemeUpdated(true);
  };
 useEffect(() => {
  const checkUnlockStatus = async () => {
    try {
      const cardsHistory = await AsyncStorage.getItem('cardsHistory');
      if (cardsHistory) {
        const updatedHistory = JSON.parse(cardsHistory);
        const totalCardsCount = updatedHistory.length;
        const unlockedCount = Math.floor(totalCardsCount / 3);
          
        let newUnlockedImages = [];
        for (let i = 0; i <= Math.min(unlockedCount, 3); i++) {
          newUnlockedImages.push(i);
        }
        setUnlockedImages(newUnlockedImages);
  
        if (newUnlockedImages.length >= 3 && newUnlockedImages.length <= dataBg.length) {
          const selectedThemeIndex = newUnlockedImages.length - 1;
          setSelectedTheme(dataBg[selectedThemeIndex]);
        } else {
          setSelectedTheme(defaultTheme);
        }
  
        setTotalCards(totalCardsCount);
      }
    } catch (error) {
      console.error('Error checking unlock status from AsyncStorage:', error);
    }
  };
    
  
  const updateThemeAndCheckStatus = async () => {
    updateTheme();
    await checkUnlockStatus();
  };

  updateThemeAndCheckStatus();
}, [defaultTheme]);
  return (
    <ImageBackground source={selectedTheme} style={{   
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }} 
    resizeMode='cover'>
      <View style={{ flexDirection: 'row', gap: 30, padding: 10, marginBottom: 200 }}>
        {dataBg.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleThemeSelection(index)} disabled={!unlockedImages.includes(index) && index !== 0}>
            <Image source={image} style={[styles.image, { opacity: !unlockedImages.includes(index) && index !== 0 ? 0.5 : 1 }]} />
            {
              !unlockedImages.includes(index) && index !== 0 ? (
                <View style={styles.unlockButton}>
                  <Text style={styles.unlockText}>Unlock</Text>
                </View>
              ) : null
            }
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 240,
  },
  unlockButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  unlockText: {
    color: 'white'
  }
});

export default Theme;