import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawerContent from './src/navigators/CustomDrawerContent';
import ProfileStack from './src/navigators/ProfileStack';
import SettingsScreen from './src/screens/settingsScreen/SettingsScreen';
import HomeStack from './src/navigators/HomeStack';
import LoginNavigator from './src/navigators/LoginStack';
import PreferenceNavigator from './src/navigators/PreferenceStack';

const Drawer = createDrawerNavigator();

function App() {
  const [logar, setLogar] = useState(true);
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#D71F34" />
      <NavigationContainer>
        {logar ? (
          <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
              swipeEnabled: true,
            }}>
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
            <Drawer.Screen name="Preference" component={PreferenceNavigator} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginNavigator />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
