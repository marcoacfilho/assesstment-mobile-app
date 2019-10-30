// React imports
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

// Expo
import { Ionicons } from '@expo/vector-icons';

export default class InputText extends Component {
    render() {
        const { children } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.menu}>
                    <Ionicons
                        name="ios-menu"
                        size={32}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
                {children}
                <View style={{ flex: 1 }} />
            </View>
        );
    }
};

// Styles
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#999999',
        paddingHorizontal: 15
    },
    menu: {
        flex: 1
    }
});