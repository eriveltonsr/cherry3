import React, { useState } from 'react';
import Modal from 'react-native-modal';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


function ModalInformation(props) {

    return (
        <View >
            <Modal isVisible={props.showModal} style={{ justifyContent: "center", alignItems: "center" }}>

                <View style={styles.containerCard}>

                    <View style={styles.titulo}>
                        <Text style={{ textAlign: "center", fontSize: 14, color: "#fff", fontFamily:"Roboto Bold" }} >
                            {props.Titulo}
                        </Text>
                    </View>

                    <View style={styles.body}>
                        <Text style={{ textAlign: "center", fontSize: 14, color: "#5D5D5D", fontFamily:"Roboto Bold",}}>
                            {props.Mensagem}
                        </Text>
                        
                    </View>
                    <View style={{paddingHorizontal:35}}>
                    {props.children}
                    </View>
                    
                </View>
            </Modal>
        </View>
    )

}



export default ModalInformation;



const styles = StyleSheet.create({


    containerCard: {
        borderRadius: 10,
        backgroundColor: "#fff",
        width: 240,

    },
    titulo: {

        backgroundColor: "#D71F34",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    body: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    }

})