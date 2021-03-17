import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ViewImageSceen from "./screens/ViewImageSceen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return <ViewImageSceen />
  // return <WelcomeScreen />;
}

