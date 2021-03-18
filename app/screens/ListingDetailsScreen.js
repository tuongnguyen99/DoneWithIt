import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.subTitle}>$100</Text>
      </View>
      <View style={styles.authorContainer}>
        <Image
          source={require("../assets/tuong.jpg")}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.authorDetailsContainer}>
          <Text style={styles.authorName}>Tuong Nguyen</Text>
          <Text>9 Listings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    color: "coral",
  },
  authorContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  authorDetailsContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  authorName: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ListingDetailsScreen;
