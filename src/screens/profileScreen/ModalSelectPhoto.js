import React, { useState } from 'react';
import Modal from 'react-native-modal';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import IconFeather from 'react-native-vector-icons/Feather';
const IconChevron = <IconFeather name="chevron-right" size={20} color="#474747" />;

function ModalSelectPhoto(props) {

    return (
        <View >
            <Modal isVisible={props.showModal} onBackdropPress={props.closeModal}>
                <View style={styles.containerMain}>
                    <View>
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: "Roboto Bold" }}>Selecionar fotos</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontFamily: "Open Sans Regular" }}>
                                Escolha as fotos, você pode escolher fotos do dispositivo, facebook ou Instagram.
                        </Text>
                        </View>
                    </View>

                    <View style={{marginTop:11,}}>                       
                        <TouchableOpacity onPress={props.selectPhotoDevice} style={{ flexDirection: "row",alignItems:"center",marginVertical: 9,}}>
                            <View style={{ width: 20, height: 20, backgroundColor: "#ABABAB", marginRight: 6 }}></View>
                            <Text style={{color:"#474747", fontSize:15,fontFamily: "Roboto Bold",paddingBottom:3,}}>dispositivo</Text>
                            <Text style={{alignContent:'flex-end',}}>{IconChevron}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: "row",alignItems:"center",marginVertical: 9 }}>
                            <View style={{ width: 20, height: 20, backgroundColor: "#ABABAB", marginRight: 6 }}></View>
                            <Text style={{color:"#474747", fontSize:15,fontFamily: "Roboto Bold",paddingBottom:3, }}>facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: "row",alignItems:"center",marginVertical: 9 }}>
                            <View style={{ width: 20, height: 20, backgroundColor: "#ABABAB", marginRight: 6 }}></View>
                            <Text style={{color:"#474747", fontSize:15,fontFamily: "Roboto Bold",paddingBottom:3, }}>instagram - conectar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalSelectPhoto;

const styles = StyleSheet.create({
    containerMain: {
        // height: 447,
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 20
    },
})