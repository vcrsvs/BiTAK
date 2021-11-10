import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function CrackForm({ addCrack }) {
  return (
    <View>
      <Formik
        initialValues={{ title: "", body: "" }}
        onSubmit={(values) => {
          addCrack(values);
        }}
      >
        {(props) => (
          <View style={globalStyles.container}>
            <View style={styles.div1}>
              <Text style={globalStyles.header2}>Name:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="e.g. Living Room 1"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
                maxLength={30}
              />
              <Text style={globalStyles.header2}>Description:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="e.g. Concrete wall behind the TV"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                maxLength={100}
              />
            </View>
            <View style={styles.div3}>
              <Text style={globalStyles.header2}>
                Take a picture of the cracked wall with a coin against it.
              </Text>
            </View>
            <View style={styles.imagePreview}></View>
            <View style={styles.div2}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={props.handleSubmit}
              >
                <Text style={styles.submitButtonText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
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
    borderColor: "#ccc",
    borderRadius: 5,
  },
  imagePreview: {
    height: "40%",
    aspectRatio: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
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
