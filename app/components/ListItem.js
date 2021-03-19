import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ListItem(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/tuong.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.tilte}>Tuong Nguyen</Text>
        <Text>9 Listings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10
  },
  detailsContainer: {
      justifyContent: "center"
  },
  title : {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default ListItem;
