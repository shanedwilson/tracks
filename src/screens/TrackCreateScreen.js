import '../_mockLocation'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { requestForegroundPermissionsAsync } from 'expo-location'
import Map from '../components/Map'

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
                const { granted } = await requestForegroundPermissionsAsync();

                if (!granted) {
                    throw new Error('Location permission not granted')
                }
            } catch (e) {
                setErr(e)
            }
    }
    
    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>Create A Track</Text>
            <Map/>
            {err ? <Text>Please enable location services.</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen
