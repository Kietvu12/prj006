import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems:  "center",
        justifyContent: "center",

    },
    headingContainer: {
        height: 120,
        width: "100%",
        position: 'absolute',
        zIndex: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,   
        flexDirection:"row",  
        gap: 85, 
        alignItems: "flex-end",
        top: 0
    },
    additionalView: {
        width: 320,
        height: 590,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 120,
    },
    imageContainer:{
        alignItems:"center",
        marginTop: 30
    },
    contentContainer:{
        marginTop: 30, 
        alignItems:"center"
    },
    titleContainer:{
        flexDirection:"row",
    },
    menuContainer:{
        backgroundColor:"black",
        left: 100,
        height: 80,
        width: 180,
        left: 20,
        marginTop: 10,
        borderRadius: 20,
        flexDirection:"column",
        padding: 15
    },
    menuOption:{
        fontFamily:"title",
        color:"#ffffff",
        margin: 2
    },
    dropdownMenu:{
        backgroundColor:"#0000000",
        borderRadius:20,
        gap:20
    }, 
    dropdownItem:{
        fontFamily:"title",
        color:"#ffffff"
    },
    cardInfoContainer:{
        flexDirection: "row",   
        alignItems:"center",
        top: 0,
        marginTop: 200,
        left: 70
    },
    imageTarotContainer:{
        width: 70,
        height:120,
        borderRadius: 5,
        marginTop: 50,
        marginLeft: 50, 
    },

})
export default styles