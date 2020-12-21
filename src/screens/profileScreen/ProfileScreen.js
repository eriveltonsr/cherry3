import React, { useState, } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import BackdropComponent from '../../components/backdropComponent/BackdropComponent';
import ModalSelectPhoto from './ModalSelectPhoto';

import ImagePicker from 'react-native-image-crop-picker';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
const IconUser = <IconFontAwesome name="user" size={80} color="#F2F2F2" />;

function ProfileScreen({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(true);
    const [widthImage, setWidthImage] = useState(0);
    const [heightImage, setHeightImage] = useState(0);
    const [widthView, setWidthView] = useState(0);
    const [heightView, setHeightView] = useState(0);

    const selectPhotoDevice = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
        });
    }

    const findDimesions = (layout) => {
        let { x, y, width, height } = layout;

        setWidthView((width / 3) - 10);
        setHeightView((width / 3) - 10);

        setWidthImage((width / 3) - 20);
        setHeightImage((width / 3) - 20);


    }
  
    return (
        <BackdropComponent>
            <ModalSelectPhoto showModal={isModalVisible} closeModal={() => setModalVisible(false)} selectPhotoDevice={selectPhotoDevice} />
            <View onLayout={(event) => { findDimesions(event.nativeEvent.layout) }} style={styles.cardChoosePhoto}>
                <View style={{}}>
                    <Text style={styles.textTitle}>
                        Fotos
                    </Text>
                    <Text style={styles.textcontent}>
                        Escolha 6 fotos
                    </Text>
                </View>
                    <View style={{ flexDirection: 'row',flexWrap: "wrap", justifyContent:'space-between' }}>

                        {/* <View style={{flex:1, width:widthImage,height:heightImage}}>
                            <Text style={{ width:widthImage,height:heightImage,backgroundColor: 'pink', borderRadius: 10, textAlign: 'center' }}>
                                {IconUser}
                            </Text>
                        </View> */}
                        <View style={{ width: widthView, height: heightView, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                style={{ width: widthImage, height: heightImage, borderRadius: 10, }}
                                source={require('../../assets/image/PhotoAna.png')}
                            />
                        </View>
                        <View style={{ width: widthView, height: heightView, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ width: widthImage, height: heightImage, borderRadius: 10, }}
                                source={require('../../assets/image/PhotoAna.png')}
                            />
                        </View>
                        <View style={{ width: widthView, height: heightView, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ width: widthImage, height: heightImage, borderRadius: 10, }}
                                source={require('../../assets/image/PhotoAna.png')}
                            />
                        </View>

                        <View style={{ width: widthView, height: heightView, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ width: widthImage, height: heightImage, borderRadius: 10, }}
                                source={require('../../assets/image/PhotoAna.png')}
                            />
                        </View>
                        <View style={{ width: widthView, height: heightView, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ width: widthImage, height: heightImage, borderRadius: 10, }}
                                source={require('../../assets/image/PhotoAna.png')}
                            />
                        </View>
                        <View style={{ width: widthView, height: heightView, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ width: widthImage, height: heightImage, borderRadius: 10, }}
                                source={require('../../assets/image/PhotoAna.png')}
                            />
                        </View>
                    </View>

                </View>
            <View style={styles.cards}>
                <View style={styles.viewOfTheText}>
                    <Text style={styles.textTitle}>
                        Ela gosta de ouvir
                    </Text>
                    <Text style={styles.textcontent}>
                        Que tal ouvir a play de sua crush
                    </Text>
                </View>
            </View>
            <View style={styles.cards}>
                <View style={styles.viewOfTheText}>
                    <Text style={styles.textTitle}>
                        Filmes e séries favoritos
                    </Text>
                    <Text style={styles.textcontent}>
                        Comente sobre as séries e filmes
                        que ela gosta.
                    </Text>
                </View>
            </View>
        </BackdropComponent>
    );
};

export default ProfileScreen;
const styles = StyleSheet.create({
    cardChoosePhoto: {
        flex: 1,
        backgroundColor: "#FFF",
        marginTop: -100,
        borderRadius: 10,
        elevation: 6,
        // height: 270,
        padding: 10,
    },
    cards: {
        backgroundColor: '#FFF',
        height: 260,
        elevation: 6,
        borderRadius: 10,
        marginTop: 16,
    },
    viewOfTheText: {
        paddingLeft: 14,
        paddingTop: 20
    },
    textTitle: {
        fontFamily: 'Roboto Bold',
        fontSize: 18,
    },
    textcontent: {
        fontFamily: 'Open Sans Regular',
        fontSize: 14,
    }
});