// React imports
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class PrimaryButton extends Component {
    render() {
        const { btnTxt } = this.props;
        return (
            <TouchableOpacity style={styles.container} {...this.props}>
                <Text style={styles.btnTxt}>{btnTxt}</Text>
            </TouchableOpacity>
        );
    }
};

// Styles
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 40,
        backgroundColor: '#999999',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTxt: {
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 'bold'
    }
});