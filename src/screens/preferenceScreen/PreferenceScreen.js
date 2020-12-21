import React, { useState, } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,

} from 'react-native';
import BackdropComponent from '../../components/backdropComponent/BackdropComponent';
import ModalInformation from '../../components/modalInformation/ModalInformation';
import ButtonOK from '../../components/buttomOK/ButtonOK';
import IconFeather from 'react-native-vector-icons/Feather';
import RangeSlider from 'rn-range-slider';

const IconChevron = <IconFeather name="chevron-right" size={25} color="#474747" borderColor="black" />;


function PreferenceSceen({ route, navigation, fromUser }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');



    // const { itemId } = route.params;
    // const { otherParam } = route.params;
    const [modalVisible, setModalVisible] = useState(false)
    const cadastrar = () => {
        setModalVisible(!modalVisible);
    }

    const disposeModal = () => {
        setModalVisible(false);
    }

    return (

        <BackdropComponent>
            <View style={styles.card}>
                <View>
                    <Text style={styles.label}>Preferências</Text>


                    <TouchableOpacity style={{ flexDirection: "row" }} >

                        <Text style={styles.labelOptions}>localização</Text>
                        {IconChevron}
                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: "row" }} >

                        <Text style={styles.labelOptions}>hashtags</Text>
                        {IconChevron}
                    </TouchableOpacity>



                </View>
                <View>
                    
                <Text style={styles.labelOptions}>idade do pretendente</Text>
                    <RangeSlider

                        style={{ width: 300, height: 70,marginTop: -40,}}
                        gravity={'center'}
                        min={18}
                        max={100}
                        step={1}
                        lineWidth={12}
                        thumbRadius={18}
                        labelBackgroundColor="#D71F34"
                        selectionColor="#00C276"
                        blankColor="#ACACAC"
                        thumbColor="#00C276"
                        thumbBorderColor="#00C276"
                        labelBorderColor="#D71F34"
                    
                    />
                </View>



            </View>


        </BackdropComponent>
    );
}

export default PreferenceSceen;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: -90,
        borderRadius: 10,
        elevation: 6,
        padding: 16,

    },

    label: {

        fontFamily: 'Roboto Bold',
        fontSize: 18,
        color: "black",
        marginTop: 20,
        marginLeft: 10,
        paddingBottom: 20,


    },

    labelOptions: {

        fontFamily: 'Roboto Bold',
        fontSize: 18,
        color: "#474747",
        marginLeft: 10,
        paddingBottom: 10,
    },


});