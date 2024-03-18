import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        gap: 10,
        flexDirection: "row"
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
    mainMemoriesContainer:{
        height: 520,
        width: 300,
        borderRadius: 30,
        padding: 20,
        justifyContent: "center",
        top: 125
    },
    backgroundHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10, // Để tạo khoảng cách từ mép màn hình
      },
      imageStyle: {
        height: 35,
        width: 35,
        marginLeft: 0,
      },
      leftContainer: {
        flex: 1,
        alignItems: 'flex-start', 
        flexDirection: "row"
      },
      rightContainer: {
        flex: 1,
        alignItems: 'flex-end', // Canh phải
      },
})
export default styles