import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import ModalInformation from '../../components/modalInformation/ModalInformation';
import ButtonOK from '../../components/buttomOK/ButtonOK';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const logar = () => {
    setModalVisible(!modalVisible);
  };

  const disposeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logo}>
          <Image source={require('../../assets/image/Cherry.png')} />
        </View>
        <View>
          <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              // autoFocus={true}
              placeholder="joao@gmail.com"
              placeholderTextColor="#fff"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <Text style={styles.textoLadoDireito}>e-mail invalido.</Text>
          </View>

          <View>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={text => setSenha(text)}
              value={senha}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Senha')}>
              <Text style={styles.textoLadoDireito}>Recuperar senha.</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buttonEntrar} onPress={logar}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.textOpcaoDecadastro}>ou faça login com</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.buttonEntrarFacebook}
              // onPress={onPress}
            >
              <Image source={require('../../assets/image/LogoFacebook.png')} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonEntrarInsta}
              // onPress={onPress}
            >
              <Image source={require('../../assets/image/LogoInstagram.png')} />
            </TouchableOpacity>
          </View>

          <View
            style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
            <Text style={styles.textNovoAqui}>novo por aqui?</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cadastro');
              }}>
              <Text style={styles.textCadastrese}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ModalInformation
          Titulo="Login"
          Mensagem="Usuário inválido."
          showModal={modalVisible}>
          <ButtonOK disposeModal={disposeModal} />
        </ModalInformation>
      </ScrollView>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D71F34',
    flex: 1,
    padding: 30,
  },
  logo: {
    // backgroundColor: "pink",
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EEA3AC',
    backgroundColor: '#E05262',
    color: '#fff',
    fontSize: 16,
  },
  textoLadoDireito: {
    textAlign: 'right',
    fontSize: 17,
    color: '#fff',
  },
  buttonEntrar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FC4A5E',
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

  buttonEntrarFacebook: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 4,
    borderRadius: 5,
  },
  buttonEntrarInsta: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
  },

  textOpcaoDecadastro: {
    alignSelf: 'center',
    color: '#ffff',
    fontSize: 17,
  },

  textNovoAqui: {
    fontFamily: 'Open Sans Regular',
    fontSize: 12,
    color: '#fff',
  },
  textCadastrese: {
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    color: '#fff',
    marginTop: -2,
  },
});
