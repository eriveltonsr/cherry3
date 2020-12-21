import React from 'react';
import {
    Image,
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    FlatList,
    Button
} from 'react-native';

import FlatListConbinationsComponent from './FlatListConbinationsComponent';
import FlatListLikeComponent from './FlatListLikeComponent';

const DATA = [
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
    return (
        <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 10 }}>
            <TouchableOpacity style={{ flexDirection: 'row', }}
                    onPress={props.openChat}
                >
                
                <Image
                    style={{ width: 45, height: 45, borderRadius: 10 }}
                    source={require('../../assets/image/PhotoAna.png')}
                />
                <View style={{ flex: 1, marginLeft: 10, }}>
                    <Text style={{ fontFamily: 'Roboto Bold', fontSize: 16 }} >Ana</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontFamily: 'Open Sans Regular', fontSize: 12 }}>Lorem ipffffdddddddddddddfffffdddddssssssssfffffffffffffddddddddddddddd</Text>
                </View>
            </TouchableOpacity>
            {/* <Text>{props.title}</Text> */}
        </View>
    );
}

function ConbinationsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        <FlatListConbinationsComponent openChat={() => navigation.navigate('Chat')} />
                        <FlatListLikeComponent />
                    </View>}
                data={DATA}
                renderItem={({ item, }) => <Item title={item.title} openChat={() => navigation.navigate('Chat')} />}
            />
        </View>
    );
}
export default ConbinationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        // margin:10
    },

});