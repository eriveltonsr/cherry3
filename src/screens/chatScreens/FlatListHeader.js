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
      
];



function RenderFlatList(props) {
    return (
        <View style={{ marginTop:14, marginBottom:14,marginLeft:14,}}>
            <TouchableOpacity
                style={{elevation:8,borderRadius: 10,}}
            >
                <Image
                    style={{ width: 144, height: 144, borderRadius: 10, }}
                    source={require('../../assets/image/PhotoCarla.png')}
                />

            </TouchableOpacity>
            {/* <Text>{props.title}</Text> */}
        </View>
    );
}

function FlatListHeader(props) {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={DATA}
                            renderItem={({ item, }) => <RenderFlatList title={item.title} />}
                        />
                    </View>
                    <View style={styles.containerConversation}>
                        <Text style={styles.textConversation}>
                            Conversa
                         </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default FlatListHeader;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D71F34'
    },
    containerConversation: {
        backgroundColor: '#FFF',
        height: 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: 0,
        padding: 30
    },
    textConversation: {
        fontFamily: 'Roboto Bold',
        fontSize: 16
    }
});