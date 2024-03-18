import { rows } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems:  "center",
        justifyContent: "center",
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
    moonOptionContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        padding: 20,
        height: 500,
        gap: 20
    },
    optionContainer: {
      flexDirection:"row",
      gap:5
  }
})

export default styles