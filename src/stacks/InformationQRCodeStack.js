import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import QRcodeScreen from '../screens/QRcodeScreen'

const Stack = createStackNavigator();
const InformationQRCodeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="QRcodeScreen" component={QRcodeScreen} />
    </Stack.Navigator>
  );
}

export default InformationQRCodeStack;
