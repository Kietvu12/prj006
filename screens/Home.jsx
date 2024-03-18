import { Dimensions, Image, ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './home.style'


const Home = () => {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    setIsMuted(prevState => !prevState);
  };
  return (
    <ImageBackground style={styles.backgroundContainer}
      source={require("../assets/image/backgr.png")}
      resizeMode='cover'
    >
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
        <View style={{ position: 'absolute', bottom: 100}}>
          <Image source={require("../assets/image/swipe-up(3).gif")} style={{ height: 100, width: 70, left:16, right:100 }} />
          <Text style={{ fontFamily: "title", color: "#ffffff", textAlign: 'center', bottom:20 }}>Make your day</Text>
        </View>
      </View>
    </ImageBackground >
  )
}

export default Home



