import { StyleSheet } from "react-native";
import { Directions } from "react-native-gesture-handler";

const styles =  StyleSheet.create({
  mainMemoriesContainer:{
    height: 520,
    width: 320,
  }, 
  itemContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 320,
    marginTop : 10,
    flexDirection: "row",
    borderRadius: 10,
    left: 0,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    right: 10,
  },
  dayContainer:{
    width:50,
    alignItems: "center"
  },
  contentContainer:{
    alignContent:"flex-start",
    width: 25
  }
});

export default styles