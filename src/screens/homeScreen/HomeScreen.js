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
import ModalMatch from './ModalMatch';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors/colors';
const IconClose = <IconMaterial name="close" size={30} color={colors.grey} />;
const IconStar = <IconMaterial name="star" size={30} color={colors.cyan} />;
const IconHeart = <IconFontAwesome name="heart" size={30} color={colors.red} />;


function HomeScreen({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <BackdropComponent>
             <ModalMatch showModal={isModalVisible} />
            <View style={styles.cardPhoto}>

                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/image/Photo1.png')}
                    />
                </View>
                <View style={styles.viewIcon}>
                    <TouchableOpacity style={styles.sideIcones}>
                        {IconClose}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconMidle}>
                        {IconStar}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sideIcones}>
                        {IconHeart}
                    </TouchableOpacity>
                </View>
                <View style={styles.viewDescription}>
                   
                    <Text style={styles.textDescription}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Maecenas libero purus, consequat a tortor vitae,
                        pharetra blandit est. Nulla facilisi.
                        Curabitur sit amet placerat nisl.
                        Vestibulum ante urna, bibendum in aliquet vitae,
                        tristique vitae nulla.
                    </Text>
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

export default HomeScreen;
const styles = StyleSheet.create({
    cardPhoto: {
        flex: 1,
        backgroundColor: "#FFF",
        marginTop: -100,
        borderRadius: 10,
        elevation: 6,
        alignItems: 'center',
    },
    image: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    viewIcon: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginTop: -25,
    },
    sideIcones: {
        backgroundColor: '#FFF',
        width: 50, height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
    },
    iconMidle: {
        backgroundColor: '#FFF',
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6
    },
    viewDescription: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 15,
    },
    textDescription: {
        fontFamily: 'Open Sans Regular',
        fontSize: 16,
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
        // paddingBottom: 5,
    },
    textcontent: {
        fontFamily: 'Open Sans Regular',
        fontSize: 14,
    }
});