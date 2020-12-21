import React from 'react';
import {
    Image,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import ConbinationsScreen from '../screens/conbinationsScreen/ConbinationsScreen';
import ChatScreens from '../screens/chatScreens/ChatScreens';
import colors from '../assets/colors/colors';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const IconBars = <IconMaterial name="menu" size={30} color="#FFF" />;
const IconChat = <IconIonicons name="ios-chatbubbles" size={30} color="#FFF" />;

const Stack = createStackNavigator();

import screenOptions from '../navigators/defaultScreenOptions';

function ProfileStack({ route, navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Perfil"
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name="Perfil"
                component={ProfileScreen}

                options={{
                    //botão esquerdo
                    headerLeft: () => {
                        return <View
                            style={{
                                paddingHorizontal: 30
                            }}>
                            <TouchableOpacity
                                onPress={() => navigation.openDrawer()}
                            >
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    {IconBars}
                                </View>
                            </TouchableOpacity>
                        </View >
                    },
                    headerTitleAlign: 'center',
                    //botão direito
                    headerRight: (props) => {
                        return <View
                            style={{
                                paddingHorizontal: 30
                            }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Conversas')}
                            >
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    {IconChat}
                                </View>
                            </TouchableOpacity>
                        </View >
                    },
                }}
            />
        </Stack.Navigator>
    );
}

export default ProfileStack;