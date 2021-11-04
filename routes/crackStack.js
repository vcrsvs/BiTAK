import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CrackInput from "../screens/crackInput";

const Stack = createNativeStackNavigator();

function CrackStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Classify">
        <Stack.Screen
          name="Classify"
          component={CrackInput}
          options={{
            title: "Crack Classifier",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#555" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CrackStack;
