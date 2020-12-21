import React, { useState, } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import BackdropComponent from '../../components/backdropComponent/BackdropComponent';
import ModalInformation from '../../components/modalInformation/ModalInformation';
import ButtonOK from '../../components/buttomOK/ButtonOK';

function PasswordScreen({ route, navigation }) {
    const [email, setEmail] = useState('');


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
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        // autoFocus={true}
                        placeholder="joao@gmail.com"
                        placeholderTextColor="#ABABAB"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />

                </View>

                <TouchableOpacity
                    style={styles.buttonEnviar}
                    onPress={cadastrar}
                >
                    <Text style={styles.textButton}>
                        Enviar
                        </Text>
                </TouchableOpacity>

            </View>

            <ModalInformation
                Titulo="Senha"
                Mensagem="Sua nova senha foi enviado para email!."
                showModal={modalVisible}>
                <ButtonOK disposeModal={disposeModal} >

                </ButtonOK >
            </ModalInformation >

        </BackdropComponent>
    );
}

export default PasswordScreen;

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

        fontFamily: 'Open Sans',
        fontSize: 16,
        color: "#ABABAB",
        marginTop: 18,
        marginLeft: 10,
        marginBottom: 3,


    },
    input: {

        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ABABAB",
        backgroundColor: "#fffB",
        color: "#ABABAB",
        fontSize: 16,
        paddingLeft: 10,


    },

    buttonEnviar: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D71F34",
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
    },
    textButton: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold"
    },

});