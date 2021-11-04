import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function CrackInput() {
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          width: "100%",
          height: "20%",
          padding: 10,
          backgroundColor: "gold",
        }}
      >
        <Text style={globalStyles.header1}>
          Take a picture of the cracked wall with a coin against it.
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "50%",
          padding: 10,
          backgroundColor: "grey",
        }}
      ></View>
      <StatusBar style="auto" />
    </View>
  );
}
