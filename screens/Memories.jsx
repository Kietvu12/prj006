import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { nativeID } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes'
import styles from './memories.style'
import MemoriesMainView1 from '../components/MemoriesMainView1'
import MemoriesMainView2 from '../components/MemoriesMainView2'

const data = [
  {
    year: "2024",
    imageMonthly: [
      {
        month: "January", imageDaily: [
          {
            day: "01", time:"05:10", imageUrl: [
              require("../assets/image/Moon/moon1.png"),
            ],
            title: [
              "- John Lennon."
            ],
            content: [
              "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
            ],
            tarot: [
              "The fool"
            ]
          },
          {
            day: "02", time: "05:10", imageUrl: [
              require("../assets/image/Moon/moon1.png"),
            ],
            title: [
              "- John Lennon."
            ],
            content: [
              "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
            ],
            tarot: [
              "The fool"
            ]
          },
          {
            day: "03",time: "05:10", imageUrl: [
              require("../assets/image/Moon/moon1.png"),
            ],
            title: [
              "- John Lennon."
            ],
            content: [
              "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
            ],
            tarot: [
              "The fool"
            ]
          },
          {
            day: "04", time: "05:10", imageUrl: [
              require("../assets/image/Moon/moon1.png"),
            ],
            title: [
              "- John Lennon."
            ],
            content: [
              "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
            ],
            tarot: [
              "The fool"
            ]
          },

        ]
      },
      {
        month: "Feabruary", imageDaily: [
          {
            day: "01", time:"05:10", imageUrl: [
              require("../assets/image/Moon/moon1.png"),
            ],
            title: [
              "- John Lennon."
            ],
            content: [
              "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
            ],
            tarot: [
              "The fool"
            ]
          },
          {
            day: "02", time: "05:10", imageUrl: [
              require("../assets/image/Moon/moon1.png"),
            ],
            title: [
              "- John Lennon."
            ],
            content: [
              "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
            ],
            tarot: [
              "The fool"
            ]
          },
          {
            day: "03",time: "05:10", imageUrl: [
              require("../assets/image/Moon/moon1.png"),
            ],
            title: [
              "- John Lennon."
            ],
            content: [
              "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
            ],
            tarot: [
              "The fool"
            ]
          },
          {
            day: "04", time: "05:10", imageUrl: [
              require("../assets/image/Moon/moon1.png"),
            ],
            title: [
              "- John Lennon."
            ],
            content: [
              "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
            ],
            tarot: [
              "The fool"
            ]
          },

        ]
      },
    ]
  }
]

const Memories = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [showMainView1, setShowMainView1] = useState(true);

  const handleToggleMute = () => {
    setIsMuted(prevState => !prevState);
    setShowMainView1(prevState => !prevState);

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
            <Text style={{ fontFamily: "title", color: "#ffffff", fontSize: 25, alignSelf: "center" }}>Memories</Text>
          </View>
          <TouchableOpacity onPress={handleToggleMute}>
            <View style={styles.rightContainer}>
              <Image source={isMuted ? require("../assets/image/date_range.png") : require("../assets/image/list.png")} style={styles.imageStyle} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainMemoriesContainer}>
      {showMainView1 ? <MemoriesMainView1 data={data} /> : <MemoriesMainView2 data={data}/>}
      </View>
    </ImageBackground>

  )
}


export default Memories

