import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainMemoriesContainer:{
        backgroundColor : 'rgba(0, 0, 0, 0.5)',
        height: 520,
        width: 320,
        borderRadius: 30,
        padding: 20, 
    },
    imageContainer: {
      marginTop: 15,
      flexDirection: "row",
      flexWrap: "wrap", // Cho phép các phần tử wrap sang hàng mới khi cần
  },
  itemContainer:{
    flexDirection:"column",
    alignItems:"center",
    marginRight:15
  }
})
export default styles