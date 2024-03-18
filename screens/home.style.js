import { rows } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems:  "center",
        justifyContent: "center"
    },
    headingContainer: {
        height: 120,
        width: "100%",
        backgroundColor: "#000000",
        opacity: 0.58, 
        position: 'absolute',
        zIndex: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,   
        flexDirection:"row",  
        gap: 85, 
        alignItems: "flex-end",
        top: 0
    },
    logoContainer: {
        height: 40,
        width:40,
        alignItems: "flex-end"
    },
    musicContainer: {
        height: 35,
        width: 35
    }, 
})

export default styles