import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems:  "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "rgba(0, 0, 0, 0.9)"
    },
    headingContainer: {
        height: 120,
        width: "100%",
        position: 'absolute',
        paddingHorizontal: 24,
        paddingVertical: 12,   
        flexDirection: "row",
        gap: 85, 
        alignItems: "flex-end",
        top: 0
    },
    leftContainer: {
        flex: 1,
        flexDirection: "row"
      },
      backgroundHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10, // Để tạo khoảng cách từ mép màn hình
      },
})
export default styles
