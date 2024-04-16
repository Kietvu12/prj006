import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native' 
import React, { useContext, useEffect, useState } from 'react' 
import styles from './diary.style' 
import Moon from '../components/Moon' 
import AsyncStorage from '@react-native-async-storage/async-storage' 
import images from '../data/data'
import dataBg from '../data/dataBg'
import { ThemeContext, ThemeProvider } from '../components/ThemeContext'
// const clearAllData = async () => {
//   try {
//       await AsyncStorage.clear();
//       console.log('Xóa tất cả dữ liệu thành công!');
//   } catch (error) {
//       console.log('Đã có lỗi xảy ra khi xóa dữ liệu:', error);
//   }
// }
// clearAllData()
const image = images[0].urls
const Diary = () => { 
  const [isMuted, setIsMuted] = useState(false); 
  const handleToggleMute = () => { 
    setIsMuted(prevState => !prevState); 
  }; 
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [selectedImage, setSelectedImage] = useState('');  
  const handleDone = async () => { 
    try { 
      const entry = { 
        title: title, 
        content: content, 
        selectedImage: selectedImage, 
        date: new Date() 
      }; 
      let entries = await AsyncStorage.getItem('diaryEntries'); 
      entries = entries ? JSON.parse(entries) : []; 
      entries.push(entry); 
      await AsyncStorage.setItem('diaryEntries', JSON.stringify(entries)); 
    } catch (error) { 
      console.error('Error saving entry:', error); 
    } 
  }; 
  const handleImageSelect = (index) => { 
    setSelectedImage(index); 
    AsyncStorage.setItem('selectedImageIndex', index.toString()); 
  }; 
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0]
  useEffect(() => {
      if (!selectedTheme) {
          setSelectedTheme(defaultTheme);
      }
  }, [selectedTheme]);
  return (
      <ImageBackground source={selectedTheme} style={styles.backgroundContainer} resizeMode='cover'>
      <View style={styles.headingContainer}> 
        <View style={styles.backgroundHeadingContainer}> 
          <View style={styles.leftContainer}> 
            <Image 
              source={require('../assets/image/back_btn.png')} 
            /> 
            <Text style={{ fontFamily: "title", color: "#ffffff", fontSize: 25, alignSelf: "center" }}>Diary</Text> 
          </View> 
          <TouchableOpacity onPress={handleDone}> 
            <View style={styles.rightContainer}> 
              <Image source={require("../assets/image/done.png")} style={styles.imageStyle} /> 
            </View> 
          </TouchableOpacity> 
        </View> 
      </View> 
      <View style={styles.moonOptionContainer}> 
        <Moon imageUrl={image} handleImageSelect={handleImageSelect} /> 
        <TextInput placeholder='Title' value={title} 
          onChangeText={setTitle} placeholderTextColor="#ffffff" style={{ color: "#ffffff", fontSize: 15, fontFamily: "title" }}></TextInput> 
        <Image source={require("../assets/image/Vector 1.png")} /> 
        <TextInput placeholder='Content' value={content} 
          onChangeText={setContent} placeholderTextColor="#ffffff" style={{ color: "#ffffff", fontSize: 15, fontFamily: "title" }}></TextInput> 
      </View> 
    </ImageBackground > 
  ) 
} 
export default Diary 