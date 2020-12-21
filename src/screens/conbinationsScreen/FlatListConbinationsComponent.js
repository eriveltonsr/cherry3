import React from 'react';
import {
    Image,
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    FlatList,
} from 'react-native';

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

function RenderFlatList(props) {
    return (
        <View style={{ marginLeft: 14, marginBottom: 1, }}>
            <TouchableOpacity
                style={{ elevation: 8, borderRadius: 10, }}
                onPress={props.openChat}
            >
                <Image
                    style={{ width: 80, height: 80, borderRadius: 10, }}
                    source={require('../../assets/image/PhotoCarla.png')}
                />

            </TouchableOpacity>
            <View style={{ flex: 1, }}>
                <Text style={{ fontFamily: 'Open Sans Regular', fontSize: 12, color: '#FFF' }} >Carla</Text>
            </View>
            {/* <Text>{props.title}</Text> */}
        </View>
    );
}

function FlatListConbinationsComponent(props) {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.textCobinations}>
                        Combinações
                    </Text>
                    <View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={DATA}
                            renderItem={({ item, }) => <RenderFlatList title={item.title} openChat={props.openChat} />}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}
export default FlatListConbinationsComponent;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D71F34'
    },
    textCobinations: {
        fontFamily: 'Roboto Bold',
        fontSize: 16,
        color: '#FFF',
        paddingLeft: 30,
        paddingTop: 15,
        paddingBottom: 10
    }
});