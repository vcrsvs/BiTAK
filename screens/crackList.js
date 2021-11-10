import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import CrackItem from "../components/crackItem";

export default function CrackList({ navigation }) {
  const [cracks, setCracks] = useState([
    { name: "Living Room 1", desc: "Concrete wall behind the TV", key: "1" },
  ]);

  const detailsButton = (key) => {
    setCracks((prevCracks) => {
      return prevCracks.filter((todo) => todo.key != key);
    });
  };

  const addButton = () => {
    navigation.navigate("Add Crack");
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.scrollDiv}>
        <FlatList
          data={cracks}
          renderItem={({ item }) => (
            <CrackItem item={item} pressHandler={detailsButton} />
          )}
        />
        <TouchableOpacity style={styles.addButton} onPress={addButton}>
          <Text style={globalStyles.header1}>+ ADD ITEM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollDiv: {
    width: "100%",
    height: "100%",
    padding: 5,
    alignItems: "stretch",
    justifyContent: "flex-start",
    // borderWidth: 1,
    // borderColor: "black",
    //  backgroundColor: "dodgerblue",
  },
  addButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
  },
});
