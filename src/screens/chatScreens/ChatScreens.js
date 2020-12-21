import React, { useState } from 'react';
import {
    Image,
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    FlatList,
    TextInput,
} from 'react-native';

import FlatListHeader from './FlatListHeader'

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
const IconSend = <IconMaterialIcons name="send" size={30} color={'#5D5D5D'} />;
const Usuario1 = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];


function Item(props) {
    const [usuario1, setUsuario1] = useState(Usuario1);
    return (

        <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 10 }}>
            {usuario1 &&
                <View style={{ flexDirection: 'row', }}

                >

                    <Image
                        style={{ width: 45, height: 45, borderRadius: 10 }}
                        source={require('../../assets/image/PhotoAna.png')}
                    />
                    <View style={{ flex: 1, marginLeft: 10, }}>
                        <View style={{ marginRight: 68 }}>
                            <Text style={{ fontFamily: 'Roboto Bold', fontSize: 16 }} >Ana</Text>
                            <Text style={{ fontFamily: 'Open Sans Regular', fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>

                        <View style={{ alignSelf: 'flex-end', marginRight: 11 }}><Text style={{ fontFamily: 'Open Sans Regular', fontSize: 8, textAlign: 'right', paddingTop: 5 }}>07/06/2020 -12:45</Text></View>
                    </View>

                </View>
            }
            {usuario1 &&
                <View style={{ marginTop: 10, marginLeft: 68, }}>
                    <View style={{ padding: 10, marginLeft: 10, backgroundColor: '#FFD6DB', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10 }}>
                        <Text style={{ fontFamily: 'Open Sans Regular', fontSize: 12 }}>Eu também achei você interessante, que tal marcamos de tomar alguma coisa qualquer dias desses? </Text>
                        <Text style={{ fontFamily: 'Open Sans Regular', fontSize: 8, textAlign: 'right', paddingTop: 5 }}>07/06/2020 -12:45</Text>
                    </View>
                </View>
            }
        </View>
    );
}

function ChatScreens({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        <FlatListHeader />
                    </View>}
                data={Usuario1}
                renderItem={({ item, }) => <Item title={item.title} />}
            />
            <View style={{ backgroundColor: '#F2F2F2', borderRadius: 20,paddingHorizontal: 10, paddingRight:40}}>
                <View style={{}}>
                    <TextInput
                        multiline={true}
                        style={{ width: '100%', }}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
                    
                </View>
                <View style={{position:'absolute',bottom:9,right:10}}>
                        <TouchableOpacity style={{  }}>
                            {IconSend}
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    );
}
export default ChatScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        // margin:10
    },

});