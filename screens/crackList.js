import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import CrackForm from "./crackForm";
import CrackItem from "../components/crackItem";

export default function CrackList({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [cracks, setCracks] = useState([
    { title: "Living Room 1", body: "Concrete wall behind the TV", key: "1" },
  ]);

  const addCrack = (crack) => {
    crack.key = Math.random().toString();
    setCracks((currentCracks) => {
      return [crack, ...currentCracks];
    });
    setModalOpen(false);
  };

  const detailsButton = (key) => {
    setCracks((prevCracks) => {
      return prevCracks.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <MaterialIcons
              name="close"
              size={24}
              style={styles.closeButton}
              onPress={() => setModalOpen(false)}
            />
            <CrackForm addCrack={addCrack} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.scrollDiv}>
        <MaterialIcons
          name="add"
          size={24}
          style={styles.addButton}
          onPress={() => setModalOpen(true)}
        />
        <FlatList
          data={cracks}
          renderItem={({ item }) => (
            <CrackItem item={item} pressHandler={detailsButton} />
          )}
        />
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
  },
  addButton: {
    alignSelf: "center",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
  },
  closeButton: {
    alignSelf: "center",
    marginTop: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
  },
});
