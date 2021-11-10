import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function CrackInput() {
  const [cracks, setCracks] = useState();

  return (
    <View style={globalStyles.container}>
      {/* INPUT FIELD */}
      <View style={styles.div1}>
        {/* NAME */}
        <Text style={globalStyles.header2}>Name:</Text>
        <TextInput
          style={styles.inputField}
          placeholder="e.g. Living Room 1"
          onSubmitEditing={(val) => setName(val)}
          maxLength={30}
        />
        {/* DESC */}
        <Text style={globalStyles.header2}>Description:</Text>
        <TextInput
          style={styles.inputField}
          placeholder="e.g. Concrete wall behind the TV"
          onSubmitEditing={(val) => setName(val)}
          maxLength={100}
        />
      </View>
      {/* IMAGE */}
      <View style={styles.div3}>
        <Text style={globalStyles.header2}>
          Take a picture of the cracked wall with a coin against it.
        </Text>
      </View>
      <View style={styles.imagePreview}></View>
      <StatusBar style="auto" />
      {/* SUBMIT */}
      <View style={styles.div2}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  div1: {
    width: "100%",
    height: "30%",
    padding: 5,
    justifyContent: "space-evenly",
  },
  div2: {
    width: "100%",
    height: "15%",
    padding: 5,
    justifyContent: "space-evenly",
  },
  div3: {
    width: "100%",
    height: "10%",
    padding: 5,
  },
  inputField: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
  imagePreview: {
    height: "40%",
    aspectRatio: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  submitButton: {
    width: "100%",
    height: "50%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  submitButtonText: {
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1,
  },
});
