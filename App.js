/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DestaquesStack from './src/stacks/DestaquesStack'
import DepartamentoStack from './src/stacks/DepartamentosStack'
import InformationQRCodeStack from './src/stacks/InformationQRCodeStack'
import CustomDrawerContent from './src/stacks/CustomDrawerContent'

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={"#A71414"} />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={(props) => <CustomDrawerContent {...props} />}
          openByDefault={false}
        >
          <Drawer.Screen name="DestaquesStack" component={DestaquesStack} />
          <Drawer.Screen name="DepartamentoStack" component={DepartamentoStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};




export default App;
