import React, { useEffect, useState } from 'react'; 
import { Image, ScrollView, Text, View } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useNavigation } from '@react-navigation/native';
import styles from './memoriesMainView2.style';
const images = [ 
  require("../assets/image/Moon/moon1.png"), 
  require("../assets/image/Moon/moon2.png"), 
  require("../assets/image/Moon/moon3.png"), 
  require("../assets/image/Moon/moon4.png"), 
  require("../assets/image/Moon/moon5.png"), 
] 
const MemoriesMainView2 = () => { 
  const navigation = useNavigation();
  const [diaryEntries, setDiaryEntries] = useState([]); 
  const fetchDiaryEntries = async () => {
    try {
      const entries = await AsyncStorage.getItem('diaryEntries');
      if (entries) {
        const parsedEntries = JSON.parse(entries).map(entry => {
          // Định dạng ngày tháng từ string thành object Date
          const entryDate = new Date(entry.date);
          // Lấy các thông tin ngày, tháng, năm, giờ, phút từ entryDate
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
    const unsubscribe = navigation.addListener('focus', () => {
      fetchDiaryEntries();
    });

    fetchDiaryEntries();

    return unsubscribe;
  }, []);
  const monthTranslations = {
    'Tháng 1': 'January',
    'Tháng 2': 'February',
    'Tháng 3': 'March',
    'Tháng 4': 'April',
    'Tháng 5': 'May',
    'Tháng 6': 'June',
    'Tháng 7': 'July',
    'Tháng 8': 'August',
    'Tháng 9': 'September',
    'Tháng 10': 'October',
    'Tháng 11': 'November',
    'Tháng 12': 'December',
  };
  return ( 
    <ScrollView style={styles.mainMemoriesContainer}> 
    {diaryEntries.map((entry, index) => ( 
      <View key={index} style={styles.itemContainer }>  
      <View style={styles.dayContainer}>
        <Text style={{fontFamily:"title", color:"#ffffff", fontSize:8}}>{entry.year}</Text>
        <Text style={{fontFamily:"title", color:"#ffffff", fontSize:8}}>{entry.day}, {entry.month}</Text>     
        </View>
        <View style={styles.contentContainer}>
        <Text numberOfLines={2} style={{fontFamily:"title", color:"#ffffff", fontSize:8}}>{entry.content}</Text>
        </View>
        {/* <Text>{entry.selectedImage}</Text> */}
        <Image source={images[entry.selectedImage]}></Image>
      </View>   
    ))} 
  </ScrollView> 
  ) 
} 
export default MemoriesMainView2