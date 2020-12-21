import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

import colors from '../assets/colors/colors';
const screenOptions = ({ route, navigation }) => {
    return ({
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: colors.red,
            // elevation:0 
        },
        headerTitleAlign: 'center', 
    });
}
export default screenOptions;