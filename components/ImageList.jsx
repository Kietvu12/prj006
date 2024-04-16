import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../data/data';
import { MoodContext } from './MoodContext';

const ImageList= () => {
  const { selectedMood, setSelectedMood } = useContext(MoodContext);
  const defaultMood = images[0].urls;
  const [unlockedImages, setUnlockedImages] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const [moodUpdated, setMoodUpdated] = useState(false);

  const handleMoodSelection = (index) => {
    if (unlockedImages.includes(index) || index === 0) {
      setSelectedMood(images[index].urls);
    }
  };

  const updateMood = () => {
    setSelectedMood(defaultMood);
    setMoodUpdated(true);
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
  
        if (newUnlockedImages.length >= 3 && newUnlockedImages.length <= images.urls.length) {
          const selectedMoodIndex = newUnlockedImages.length - 1;
          setSelectedMood(images[selectedMoodIndex].urls);
        } else {
          setSelectedMood(defaultMood);
        }
  
        setTotalCards(totalCardsCount);
      }
    } catch (error) {
      console.error('Error checking unlock status from AsyncStorage:', error);
    }
  };
    
  checkUnlockStatus();
}, [defaultMood]); 
  return (
    <ScrollView>
      {images.map((category, index) => (
        <View key={index}>
          <Text style={styles.categoryTitle}>{category.types}</Text>
          {category.urls.map((url, urlindex) => (
          <TouchableOpacity key={urlindex} onPress={() => handleMoodSelection(urlindex)} disabled={!unlockedImages.includes(urlindex) && index !== 0}>
              <Image source={url} style={styles.image} />
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
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
    margin: 5,
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
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },


});

export default ImageList;