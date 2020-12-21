import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import BackdropComponent from '../../components/backdropComponent/BackdropComponent';
import ModalInformation from '../../components/modalInformation/ModalInformation';
import LoadingComponent from '../../components/loadingComponent/LoadingComponent';
import ButtonOK from '../../components/buttomOK/ButtonOK';

function CadastroScreen({route, navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  const disposeModal = () => {
    setModalVisible(false);
  };

  const cadastrar = async () => {
    setLoadingVisible(true);
    try {
      await axios.post(
        'https://cherry3-dev-api.azurewebsites.net/api/usuario',
        {
          name: nome,
          email: email,
          senha: senha,
        },
      );

      setModalVisible(!modalVisible);
    } catch (e) {
    } finally {
      setLoadingVisible(false);
    }
  };

  return (
    <>
      <BackdropComponent>
        <View style={styles.card}>
          <View>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              // autoFocus={true}
              placeholder="nome completo"
              placeholderTextColor="#ABABAB"
              onChangeText={text => setNome(text)}
              value={nome}
            />
          </View>

          <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              // autoFocus={true}
              placeholder="joao@gmail.com"
              placeholderTextColor="#ABABAB"
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>

          <View>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a sua senha"
              placeholderTextColor="#ABABAB"
              secureTextEntry={true}
              onChangeText={text => setSenha(text)}
              value={senha}
            />
          </View>

          <TouchableOpacity style={styles.buttonEntrar} onPress={cadastrar}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View />

        <ModalInformation
          Titulo="Cadastro"
          Mensagem="Cadastro realizado com sucesso!."
          showModal={modalVisible}>
          <ButtonOK disposeModal={disposeModal} />
        </ModalInformation>
      </BackdropComponent>
      {loadingVisible && <LoadingComponent />}
    </>
  );
}

export default CadastroScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -90,
    borderRadius: 10,
    elevation: 6,
    padding: 16,
  },

  label: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    color: '#ABABAB',
    marginTop: 18,
    marginLeft: 10,
    marginBottom: 3,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ABABAB',
    backgroundColor: '#fffB',
    color: '#ABABAB',
    fontSize: 16,
    paddingLeft: 10,
  },

  buttonEntrar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D71F34',
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  textButton: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
