import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CrackList from "../screens/crackList";
import CrackInput from "../screens/crackInput";

const Stack = createNativeStackNavigator();

function CrackStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Crack List">
        <Stack.Screen
          name="Crack List"
          component={CrackList}
          options={{
            title: "Crack Classifier",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#555" },
          }}
        />
        <Stack.Screen
          name="Add Crack"
          component={CrackInput}
          options={{
            title: "Add Crack",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#555" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CrackStack;
