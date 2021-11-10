import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function AddCrack({ item, pressHandler }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => pressHandler(item.key)}
    >
      <Text style={globalStyles.header1}>{item.name}</Text>
      <Text style={globalStyles.header2}>{item.desc}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
  },
});
