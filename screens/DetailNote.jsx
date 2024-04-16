
import React, { useContext, useEffect, useState } from 'react';
import { Image, ImageBackground, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './detailNote.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import images from '../data/data';
import dataBg from '../data/dataBg';
import { ThemeContext, ThemeProvider } from '../components/ThemeContext';
const image = images
const DetailNote = ({ route }) => {
    const navigation = useNavigation();
    const { entry } = route.params;
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedTarotCard, setSelectedTarotCard] = useState(null);
    const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
    const defaultTheme = dataBg[0];
    const handleDropdownPress = () => {
        setShowDropdown(!showDropdown);
    };
    useEffect(() => {
        const checkTarotForNote = async () => {
            try {
                const cardHistory = await AsyncStorage.getItem('cardsHistory');
                if (cardHistory) {
                    const history = JSON.parse(cardHistory);
                    const matchingCard = history.find(item => {
                        const cardDate = new Date(item.time);
                        return cardDate.toDateString() === new Date(entry.date).toDateString();
                    });

                    if (matchingCard) {
                        setSelectedTarotCard(matchingCard.card);
                    }
                }
            } catch (error) {
                console.error('Error checking Tarot for Note:', error);
            }
        };

        checkTarotForNote();
    }, [entry.date]);

    const handleDelete = async () => {
        try {
            let entries = await AsyncStorage.getItem('diaryEntries');
            entries = entries ? JSON.parse(entries) : [];

            const updatedEntries = entries.filter(item => item.date !== entry.date);

            await AsyncStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
            navigation.navigate('Memories');
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };

    const handleModify = () => {
        navigation.navigate('Edit', { entryData: entry });
    };
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
                    </View>
                </View>
            </View>
            <ScrollView style={styles.additionalView}>
                <Pressable onPress={handleDropdownPress}>
                    <View style={styles.imageContainer}>
                        <Image style={{ left: 100 }} source={require("../assets/image/Moon/menu.png")} />
                        {showDropdown && (
                            <View style={styles.dropdownMenu}>
                                <Pressable onPress={handleDelete}>
                                    <Text style={styles.dropdownItem}>Delete</Text>
                                </Pressable>
                                <Pressable onPress={handleModify}>
                                    <Text style={styles.dropdownItem}>Modify</Text>
                                </Pressable>
                            </View>
                        )}
                    </View>
                    <Image style={{ marginTop: 20, marginLeft: 140 }} source={image[entry.selectedImage]} />
                </Pressable>
                <View style={styles.contentContainer}>
                    <Text style={{ fontFamily: "title", color: "#ffffff", alignItems: "center", fontSize: 15 }}>
                        {entry.content}
                    </Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={{ fontFamily: "title", marginTop: 30, color: "#ffffff", left: 200, fontSize: 10 }}>
                        -"{entry.title}"
                    </Text>
                </View>
                {selectedTarotCard && (
                    <View style={styles.cardInfoContainer}>
                        <Text style={{ fontFamily: "title", color: "#ffffff", fontSize: 10, marginTop: 50 }}>{entry.date}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailTarot', { card: selectedTarotCard })}>
                            <Image style={styles.imageTarotContainer} source={selectedTarotCard.img} />
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    );
};

export default DetailNote;