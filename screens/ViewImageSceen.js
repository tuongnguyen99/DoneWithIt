import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

function ViewImageSceen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.closeButton}></TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}></TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/chair.jpg")}
          style={styles.image}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: "#4ECDC4",
  },
  imageContainer: { flex: 1 },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ViewImageSceen;
