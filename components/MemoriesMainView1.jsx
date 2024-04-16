// Import những thư viện cần thiết
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './memoriesMainView1.style';
import DetailNote from '../screens/DetailNote';
import images from '../data/data';

const image = images
const MemoriesMainView1 = ({}) => {
  const navigation = useNavigation();
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [entriesByMonth, setEntriesByMonth] = useState({});
  
  const fetchDiaryEntries = async () => {
    try {
      const entries = await AsyncStorage.getItem('diaryEntries');
      if (entries) {
        const parsedEntries = JSON.parse(entries).map(entry => {
          // Format ngày tháng từ string thành object Date
          const entryDate = new Date(entry.date);
          // Lấy thông tin ngày, tháng, năm, giờ, phút từ entryDate
          const day = entryDate.getDate();
          const month = entryDate.toLocaleString('default', { month: 'long' });
          const year = entryDate.getFullYear();
          const hour = entryDate.getHours();
          const minutes = entryDate.getMinutes();
          // Trả về entry mới với thông tin ngày tháng đã được định dạng
          return { ...entry, day, month, year, hour, minutes };
        });
        setDiaryEntries(parsedEntries);
      } else {
        setDiaryEntries([]);
      }
    } catch (error) {
      console.error('Error fetching diary entries:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchDiaryEntries);
    fetchDiaryEntries();
    return unsubscribe;
  }, []);

  useEffect(() => {
    const entriesByMonth = {};
    diaryEntries.forEach(entry => {
      const { month } = entry;
      entriesByMonth[month] = entriesByMonth[month] ? [...entriesByMonth[month], entry] : [entry];
    });
    setEntriesByMonth(entriesByMonth);
  }, [diaryEntries]);
  const navigateToImageDetail = (entry) => {
    navigation.navigate('DetailNote', { entry: entry });
  };

  return (
    <ScrollView style={styles.mainMemoriesContainer}>
    {Object.keys(entriesByMonth).map(month => (
      <View style={{ alignItems: "center" }} key={month}>
        <Text style={{ fontFamily: "title", color: "white", fontSize: 20, justifyContent: "center" }}>
          {month} {entriesByMonth[month][0].year}
        </Text>
        <View style={styles.imageContainer}>
          {entriesByMonth[month].map((entry, index) => (
            <TouchableOpacity key={index} onPress={() => navigateToImageDetail(entry)}>
              <View style={styles.itemContainer}>
                <Image source={image[entry.selectedImage]} />
                <Text style={{ fontFamily: "title", color: "white", fontSize: 8, justifyContent: "center" }}>{entry.day}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    ))}
  </ScrollView>
);
};

export default MemoriesMainView1;