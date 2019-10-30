// React imports
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    FlatList,
    Dimensions,
    StyleSheet
} from 'react-native';

// Expo
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

export default class ButtonsList extends Component {

    onPress = (item) => {
        this.props.onPress(item)
    }

    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    numColumns={3}
					scrollEnabled={false}
                    renderItem={({ item }) => (
                        <View style={styles.iconDimension}>
                            <TouchableOpacity style={styles.icon} onPress={() => this.onPress(item)}>
                                <Ionicons
                                    name={item.name}
                                    size={40}
                                    color="#222222"
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        marginBottom: 20
    },
    iconDimension: {
        width: width / 3.2,
        alignItems: 'center',
        marginBottom: 30
    },
    icon: {
        borderStyle: 'solid',
        borderColor: '#222222',
        borderWidth: 1,
        height: 80,
        width: 80,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
});