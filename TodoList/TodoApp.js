

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../TodoList/LoginScreen/Login"
import Sign from "../TodoList/LoginScreen/SignUp"
// import { Button } from 'react-native';
const Stack = createNativeStackNavigator();

const TodoApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
        
        <Stack.Screen name="Profile" component={Sign}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TodoApp;