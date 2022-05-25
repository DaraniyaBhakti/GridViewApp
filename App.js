import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NumberScreen from './src/screens/NumberScreen';
import GridScreen from './src/screens/GridScreen';


const Stack = createNativeStackNavigator();

function GridComponent() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='GridScreen' component={GridScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='NumberScreen' component={NumberScreen} options={{title:'Country Flags'}}/>
        <Stack.Screen name="GridComponent" component={GridComponent} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
