// React and React Native imports
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    AsyncStorage,
    StyleSheet
} from 'react-native';

// Redux imports
import { connect } from 'react-redux';

// Third party libraries
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import base64 from 'react-native-base64';

// Components
import InputText from '../components/InputText';
import PrimaryButton from '../components/PrimaryButton';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    };

    changeEmail = (email) => {
        this.setState({ email });
    };

    changePass = (password) => {
        this.setState({ password });
    };

    signIn = async () => {
        if (this.state.email.length > 0 || this.state.password.length > 0) {
            const email = base64.encode(this.state.email);
            const pass = base64.encode(this.state.password);
            const secret = base64.encode(toString(Math.floor(Math.random() * 100000000)));
            const jwt = `${email}.${pass}.${secret}`;
            await AsyncStorage.setItem('token', jwt);
            this.props.navigation.navigate('HomeScreen');
        } else {
            alert('Please, enter any information');
        }
    };

    render() {
        return (
            <KeyboardAwareScrollView contentContainerStyle={styles.main}>
                <StatusBar barStyle='dark-content' />
                <View style={styles.container}>
                    <Text style={styles.title}>LOGIN</Text>
                    <InputText
                        label='Email'
                        placeholder='example@email.com'
                        autoCapitalize='none'
                        onChangeText={this.changeEmail}
                    />
                    <InputText
                        label='Password'
                        placeholder='********'
                        autoCapitalize='none'
                        secureTextEntry
                        onChangeText={this.changePass}
                    />
                    <PrimaryButton btnTxt='Login' onPress={this.signIn} />
                </View>
            </KeyboardAwareScrollView>
        );
    }
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);

// Styles
const styles = StyleSheet.create({
    main: {
        flex:1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 24,
        color: '#222222',
        fontWeight: 'bold',
        marginBottom: 34
    }
});
