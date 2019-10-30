// React imports
import React, { Component, Fragment } from 'react';
import {
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

export default class InputText extends Component {
    render() {
        const { label } = this.props;
        return (
            <Fragment>
                {label &&
                    <Text style={styles.label}>{label}</Text>
                }
                <TextInput style={styles.input} {...this.props} />
            </Fragment>
        );
    }
};

// Styles
const styles = StyleSheet.create({
    label: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginBottom: 5,
        color: '#999999',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold'
    },
    input: {
        alignSelf: 'stretch',
        height: 40,
        borderColor: '#999999',
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
});