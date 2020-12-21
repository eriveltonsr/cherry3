import React, { useState } from 'react';
import Modal from 'react-native-modal';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
const IconHeart = <IconAwesome name="heart" size={45} color={'#D71F34'} />;
function ModalMatch(props) {

    return (
        <View >
            <Modal isVisible={props.showModal} >

                <View style={styles.containerMain}>
                    <View style={styles.containerImage}>
                        <View style={{ margin: 6 }}>
                            <Image
                                style={{ width: 104, height: 104, borderRadius: 100 }}
                                source={require('../../assets/image/Photo1.png')}
                            />
                        </View>

                        <View style={{ margin: 6 }}>
                            <Image
                                style={{ width: 104, height: 104, borderRadius: 100 }}
                                source={require('../../assets/image/Photo1.png')}
                            />
                        </View>

                        <View style={{ position: 'absolute', bottom: 0, top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', }}>
                            {IconHeart}
                        </View>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center',}}>
                        <Image
                            source={require('../../assets/image/match.png')}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )

}

export default ModalMatch;

const styles = StyleSheet.create({
    containerMain: {
        // backgroundColor: "blue",
    },
    containerImage: {
        justifyContent:'center',
        flexDirection: 'row',
    }
})