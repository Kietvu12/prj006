import { StyleSheet, Text, View } from 'react-native' 
import React, { useContext, useEffect } from 'react' 
import Moon from '../components/Moon' 
import { MoodContext } from '../components/MoodContext' 
import images from '../data/data' 
defaultMood = images[0].urls 
const Setting = () => { 
  const { selectedMood, setSelectedMood } = useContext(MoodContext); 
  useEffect(() => { 
      if (!selectedMood) { 
          setSelectedMood(defaultMood); 
      } 
  }, [selectedMood]); 
  return ( 
    <View> 
      <Moon imageUrl={selectedMood} /> 
    </View> 
  ) 
} 
export default Setting 
const styles = StyleSheet.create({}) 