import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>SignupScreen</Text>
            <Button
                title="Go To Signin"
                onPress={() => navigation.navigate('Signin')}
            />
            <Button
                title="Go To Main Flow"
                onPress={() => navigation.navigate('mainFlow')}
            />
        </>
    )
}

const styles = StyleSheet.create({})

export default SignupScreen
