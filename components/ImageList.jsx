import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../data/data';
import { MoodContext } from './MoodContext';
import styles from './imageList.styles';
import { useFocusEffect } from '@react-navigation/native';


const ImageList = () => {
  const { selectedMood, setSelectedMood } = useContext(MoodContext);
  const defaultMood = images[0].urls;
  const [unlockedImages, setUnlockedImages] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const [moodUpdated, setMoodUpdated] = useState(false);
  const [isImagesUnlocked, setIsImagesUnlocked] = useState(false);
  const handleMoodSelection = (index) => {
    if (unlockedImages.includes(index) || index === 0) {
      setSelectedMood(images[index].urls);
    }
  };

  const updateMood = () => {
    setSelectedMood(defaultMood);
  };
  useFocusEffect(
    React.useCallback(() => {
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
            setTotalCards(totalCardsCount);
            const newIsImagesUnlocked = newUnlockedImages.length >= 3 && newUnlockedImages.length <= dataBg.length;
          setIsImagesUnlocked(newIsImagesUnlocked);
          if (newIsImagesUnlocked) {
            const selectedMoodIndex = newUnlockedImages.length - 1;
            setSelectedMood(dataBg[selectedMoodIndex]);
          } else {
            setSelectedMood(defaultMood);
          }
        }

        } catch (error) {
          console.error('Error checking unlock status from AsyncStorage:', error);
        }
      };
      updateMood();
      checkUnlockStatus();
    }, []) 
 );
return (
  <ScrollView>
    {images.map((category, index) => (
      <View key={index}>
        <Text style={styles.categoryTitle}>{category.types}</Text>
        <View style={styles.imageContainer}>
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
      </View>
    ))}
  </ScrollView>
);
};

export default ImageList;
