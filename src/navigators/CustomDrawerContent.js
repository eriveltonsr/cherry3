import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import ModalInformation from '../components/modalInformation/ModalInformation';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

function CustomDrawerContent(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const IconPhoto = <IconMaterial name="insert-photo" size={30} color={props.state.index === 1 ? '#D71F34' : '#474747'} />;
  const IconHeart = <IconAwesome name="heart" size={30} color={props.state.index === 2 ? '#D71F34' : '#474747'} />;
  const IconSettings = <IconIonicons name="md-settings" size={30} color={props.state.index === 3 ? '#D71F34' : '#474747'} />;
  const IconExit = <IconMaterial name="exit-to-app" size={30} color={props.state.index === 4 ? '#D71F34' : '#474747'} />;

  console.log(props.state.index);
  const profileScreen = () => {
    props.navigation.navigate('Profile');
  }

  const preferenceScreen = () => {
    props.navigation.navigate('Preference');
  }

  const settingsScreen = () => {
    props.navigation.navigate('Settings');
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <DrawerContentScrollView {...props}>

      <View style={styles.container}>
        <View style={styles.viewLogo}>
          <Image
            source={require('../assets/image/LogoCherryDrawer.png')}
          />
        </View>

        <TouchableOpacity style={styles.buttonMenu}
          onPress={profileScreen}
        >
          {IconPhoto}
          <Text style={[styles.textDescription, props.state.index === 1 && { color: '#D71F34' }]}>Seu perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonMenu}
          onPress={preferenceScreen}
        >
          {IconHeart}
          <Text style={[styles.textDescription, props.state.index === 2 && { color: '#D71F34' }]}>Preferência</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonMenu}
          onPress={settingsScreen}
        >
          {IconSettings}
          <Text style={[styles.textDescription, props.state.index === 3 && { color: '#D71F34' }]}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonMenu}
        // onPress={logout}
        >
          {IconExit}
          <Text style={[styles.textDescription, props.state.index === 4 && { color: '#D71F34' }]}>Sair da conta</Text>
        </TouchableOpacity>

        <View style={styles.divider}></View>

        <TouchableOpacity
          onPress={toggleModal}
        >
          <Text style={styles.deleteAccount}>
            Apagar conta
          </Text>
          <ModalInformation showModal={isModalVisible} Titulo={<Text>Apagar conta?</Text>}>
            <View style={styles.viewButtonDelete}>
              <TouchableOpacity style={styles.buttonModalYes}>
                <Text style={styles.textButtonStyleYes}>
                  Sim
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonModalDont} onPress={toggleModal}>
                <Text style={styles.textButtonStyleDont}>
                  Não
                </Text>
              </TouchableOpacity>
            </View>
          </ModalInformation>
        </TouchableOpacity>

        <View>
          <Text style={styles.version}>
            1.0.12
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonAnnouncement}>
          <Text style={styles.textButtonAnnouncement}>REMOVER ANÚNCIOS</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}
export default CustomDrawerContent;
const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  textDescription: {
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    paddingLeft: 10,
    color: '#474747'
  },
  divider: {
    borderWidth: 1,
    borderColor: '#707070',
    marginTop: 20,
    opacity: 0.2
  },
  deleteAccount: {
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    marginTop: 20
  },
  version: {
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    marginTop: 20,
    color: '#474747',
    opacity: 0.4
  },
  buttonAnnouncement: {
    width: 220,
    height: 50,
    backgroundColor: '#00C276',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 4
  },
  textButtonAnnouncement: {
    color: '#FFF',
    fontFamily: 'Roboto Medium',
    fontSize: 14,
    paddingLeft: 10,

  },
  viewButtonDelete: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 14
  },
  buttonModalYes: {
    width: 102,
    height: 42,
    borderWidth: 1,
    borderColor: '#D71F34',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonModalDont: {
    width: 102,
    height: 42,
    backgroundColor: '#00C276',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStyleYes: {
    color: '#D71F34',
    fontFamily: 'Open Sans SemiBold',
  },
  textButtonStyleDont: {
    color: '#FFF',
    fontFamily: 'Open Sans SemiBold'
  }
});