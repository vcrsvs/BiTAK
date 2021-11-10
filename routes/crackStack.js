import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CrackList from "../screens/crackList";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CrackStack;
