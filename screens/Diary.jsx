import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native' 
import React, { useEffect, useState } from 'react' 
import styles from './diary.style' 
import Moon from '../components/Moon' 
import AsyncStorage from '@react-native-async-storage/async-storage' 
const clearAllData = async () => {
  try {
      await AsyncStorage.clear();
      console.log('Xóa tất cả dữ liệu thành công!');
  } catch (error) {
      console.log('Đã có lỗi xảy ra khi xóa dữ liệu:', error);
  }
}
const images = [ 
  require("../assets/image/Moon/moon1.png"), 
  require("../assets/image/Moon/moon2.png"), 
  require("../assets/image/Moon/moon3.png"), 
  require("../assets/image/Moon/moon4.png"), 
  require("../assets/image/Moon/moon5.png"), 
] 
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
    AsyncStorage.setItem('selectedImageIndex', index.toString()); // Lưu chỉ số vào AsyncStorage
  }; 
  return ( 
    <ImageBackground style={styles.backgroundContainer} 
      source={require("../assets/image/backgr.png")} 
      resizeMode='cover' 
    > 
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
        <Moon imageUrl={images} handleImageSelect={handleImageSelect} /> 
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