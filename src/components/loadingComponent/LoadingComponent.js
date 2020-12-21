import React from "react";
import { ActivityIndicator, StyleSheet,View } from "react-native";

function LoadingComponent(props) {

    return (

        

        <View style={[styles.loading]}>
            <ActivityIndicator size="large" color="#fff"  />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",   
        
       
    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D71F34",
    }

})
export default LoadingComponent;