import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './card.style';
import dataBg from '../data/dataBg';
import { ThemeContext, ThemeProvider } from './ThemeContext';
const Card = () => {
  const [majorArcana, setMajorArcana] = useState([]);
  const [minorArcana, setMinorArcana] = useState([]);

  const fetchData = async () => {
    const cardsHistory = await AsyncStorage.getItem('cardsHistory');
    if (cardsHistory) {
      const history = JSON.parse(cardsHistory);
      const uniqueMajorArcana = removeDuplicates(history.filter(item => item.card.arcana === 'Major Arcana'), 'name');
      const uniqueMinorArcana = removeDuplicates(history.filter(item => item.card.arcana === 'Minor Arcana'), 'name');
      setMajorArcana(uniqueMajorArcana);
      setMinorArcana(uniqueMinorArcana);
    }
  };
  const removeDuplicates = (arr, key) => {
    const uniqueNames = {};
    const result = arr.filter(item => {
      if (!uniqueNames[item.card[key]]) {
        uniqueNames[item.card[key]] = true;
        return true;
      }
      return false;
    });
    return result;
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0]
  useEffect(() => {
    setSelectedTheme(defaultTheme);
  }, []);

  return (
    <ImageBackground source={selectedTheme} style={styles.backgroundContainer} resizeMode='cover'>
      <ScrollView style> 
        <View style={{marginTop: 30, left: 25}}>
          <Text style={{fontFamily: 'title', color:"#ffffff"}}>Major Arcana</Text>
          <View style={{flexDirection:"row", flexWrap:'wrap', gap: 10}}>
            {majorArcana.map((item, index) => (
              <View style={{marginTop: 20}} key={index}>
                <Image source={item.card.img} style={{width:69, height: 122, flexDirection:"row" }}/>
              </View>
            ))}
          </View>
        </View>
        <View style={{marginTop: 30, left: 25}}>
          <Text style={{fontFamily: 'title', color:"#ffffff"}}>Minor Arcana</Text>
          <View style={{flexDirection:"row", flexWrap:'wrap', gap: 10}}>
            {minorArcana.map((item, index) => (
              <View style={{marginTop: 20}} key={index}>
                <Image source={item.card.img} style={{width:69, height: 122, flexDirection:"row" }}/>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Card;