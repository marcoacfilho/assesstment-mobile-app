// React imports
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

// Expo
import { Ionicons } from '@expo/vector-icons';

// Third party libraries
import { ifIphoneX } from 'react-native-iphone-x-helper';

export default class BottomNav extends Component {
    render() {
        const iconsList = [
            { id: 0, name: 'home', icon: 'ios-home' },
            { id: 1, name: 'cart', icon: 'ios-cart' },
            { id: 2, name: 'profile', icon: 'ios-contact' }
        ];
        return (
            <View style={styles.container}>
                {iconsList.map(item => (
                    <TouchableOpacity style={styles.icons} key={item.id}>
                        <Ionicons
                            name={item.icon}
                            size={32}
                            color="#222222"
                        />
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
};

// Styles
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderTopColor: '#999999',
        paddingHorizontal: 15,
        paddingVertical: 10,
        ...ifIphoneX({
            paddingBottom: 32
        })
    },
    icons: {
        flex: 1,
        alignItems: 'center'
    }
});