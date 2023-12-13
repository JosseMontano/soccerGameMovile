import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useLinkTo } from '@react-navigation/native';

const Login = () => {
    const linkTo = useLinkTo();

    const login = () => {
        linkTo('/Register')
    }

    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity style={styles.btn} onPress={() => login()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#fff',
        color: '#000',
        width: 200
    },
});


export default Login