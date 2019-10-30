// React and React Native imports
import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    Platform,
    StatusBar,
    StyleSheet
} from 'react-native';

// Redux imports
import { connect } from 'react-redux';

// Third party libraries
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ifIphoneX } from 'react-native-iphone-x-helper';

// Components
import NavBar from '../components/NavBar';
import BottomNav from '../components/BottomNav';
import ButtonsList from '../components/ButtonsList';
import DefaultModal from '../components/DefaultModal';

// Data
import { firstList, secondList } from '../data';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            item: []
        };
    };

    pressIcon = (item) => {
        this.setState({
            visible: true,
            item: item
        });
    };

    closeModal = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const { visible, item } = this.state;
        return (
            <Fragment>
                <StatusBar barStyle='light-content' />
                {Platform.OS === 'ios' &&
                    <View style={styles.status} />
                }
                <NavBar>
                    <Text style={styles.navTitle}>HomeScreen</Text>
                </NavBar>
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        <ButtonsList
                            data={firstList}
                            onPress={this.pressIcon}
                        />
                        <ButtonsList
                            data={secondList}
                            onPress={this.pressIcon}
                        />
                    </View>
                </KeyboardAwareScrollView>
                <BottomNav />
                <DefaultModal
                    visible={visible}
                    data={item}
                    close={this.closeModal}
                />
            </Fragment>
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
)(HomeScreen);

// Styles
const styles = StyleSheet.create({
    status: {
        ...ifIphoneX({
            height: 32
        }, {
            height: 25
        }),
        backgroundColor: '#999999',
        alignSelf: 'stretch',
    },
    navTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'normal'
    },
    main: {
        flex:1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
    },
    title: {
        fontSize: 24,
        color: '#222222',
        fontWeight: 'bold',
        marginBottom: 34
    }
});
