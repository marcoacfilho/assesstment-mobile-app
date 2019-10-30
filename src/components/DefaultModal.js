// React imports
import React, { Component } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

// Expo
import { Ionicons } from '@expo/vector-icons';

// Components
import PrimaryButton from './PrimaryButton';

export default class DefaultModal extends Component {
    render() {
        const { visible, data, close } = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <TouchableOpacity style={styles.overlay} onPress={close}>
                    <TouchableWithoutFeedback>
                        <View style={styles.container}>
                            <Ionicons
                                name={data.name}
                                size={60}
                                color="#222222"
                                style={styles.icon}
                            />
                            <Text style={styles.txt}>{data.text}</Text>
                            <PrimaryButton btnTxt='Close' onPress={close} />
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
        );
    }
};

// Styles
const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    container: {
        alignSelf: 'stretch',
        aspectRatio: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    icon: {
        marginBottom: 20
    },
    txt: {
        fontSize: 18,
        color: '#222222',
        fontWeight: 'bold',
        marginBottom: 30
    }
});