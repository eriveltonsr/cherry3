import React, { useState, } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
function BackdropComponent(props) {
    return (  
        <View style={styles.container}>
            
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                 {props.header}
                </View>

                <View style={styles.backdrop}>
                    {props.children}
                </View>
            </ScrollView>
        </View>
    );
}
export default BackdropComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    backdrop: {
        backgroundColor: "#FFF",
        flex: 1,
        padding: 30,
        borderRadius: 10,
        marginTop: -10,
    },
    header: {
        backgroundColor: "#D71F33",
        minHeight: 100,
        alignItems: "center",
    },
});