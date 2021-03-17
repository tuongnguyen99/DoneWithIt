import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      blurRadius={1}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Want</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton}></TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}></TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  logoContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {},
  loginButton: {
    height: 60,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    height: 60,
    backgroundColor: "#4ECDC4",
  },
});

export default WelcomeScreen;
