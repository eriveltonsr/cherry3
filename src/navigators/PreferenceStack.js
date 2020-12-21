
import React from 'react';


import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import PreferenceScreen from '../../src/screens/preferenceScreen/PreferenceScreen';

const Stack = createStackNavigator();
// import screenOptions from '../navigators/defaultScreenOptions';
function PreferenceStack() {


    
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Preferências"
                component={PreferenceScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "#D71F34",
                        elevation: 0,
                    },

                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                }}
            />

            

        </Stack.Navigator>)

}
export default PreferenceStack;