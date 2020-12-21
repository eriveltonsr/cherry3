import React, { useState, } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
    StatusBar
} from 'react-native';
import BackdropComponent from '../../components/backdropComponent/BackdropComponent';

function SettingsScreen({ navigation }) { 
    return (
        <View>
            <Text>Settings</Text>
        </View>
    );
};
export default SettingsScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        flex: 1,
        padding: 30,
        height: 1000
    },
});