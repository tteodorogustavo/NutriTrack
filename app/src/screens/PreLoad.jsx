import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
//importar as actions

export class Preload extends Component { 
    static navigationOptions = {
        title: '',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = (state) => {
    return {
        status:state.auth.status
    };
};

const PreloadConnect = connect(mapStateToProps, {})(Preload);
export default PreloadConnect;