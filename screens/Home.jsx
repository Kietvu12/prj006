import { Dimensions, Image, ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import styles from './home.style'
import Tarot from './Tarot'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../components/ThemeContext';
import dataBg from '../data/dataBg';
const Home = () => {
 
  const onSwipeUp = (event) => {
    if (event.nativeEvent.state === State.END) {
      navigation.navigate('Tarot');
    }
  };

  const navigation = useNavigation();
  const [isMuted, setIsMuted] = useState(false);
  
  const handleToggleMute = () => {
    setIsMuted(prevState => !prevState);
  };
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0]
  useEffect(() => {
    setSelectedTheme(defaultTheme);
  }, []); 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground source={selectedTheme} style={styles.backgroundContainer} resizeMode='cover'>
        <View style={styles.headingContainer}>
          <Image
            source={require("../assets/image/logo.png")}
            style={styles.logoContainer}
          />
          <Text style={{ color: '#ffffff', fontFamily: 'title', fontSize: 20, fontWeight: '600' }}>
            Ellinary
          </Text>
          <TouchableOpacity onPress={handleToggleMute}>
            <Image
              source={isMuted ? require('../assets/image/mute.png') : require('../assets/image/unmute.png')}
              style={styles.musicContainer}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <View style={{ position: 'absolute', bottom: 100 }}>
            <PanGestureHandler onHandlerStateChange={onSwipeUp}>
              <View>
                <Image source={require("../assets/image/swipe-up(3).gif")} style={{ height: 100, width: 70, left: 16, right: 100 }} />
                <Text style={{ fontFamily: "title", color: "#ffffff", textAlign: 'center', bottom: 20 }}>Make your day</Text>
              </View>
            </PanGestureHandler>
          </View>
        </View>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

export default Home;