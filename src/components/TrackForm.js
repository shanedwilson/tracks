import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import {Context as LocationContext } from '../context/locationContext'

const TrackForm = () => {
    const {
        state : { name, recording, locations },
        startRecording,
        stopRecording, changeName
    } = useContext(LocationContext)

    console.log(locations.length)

    return (
        <>
            <Input
                value={name}
                onChangeText={changeName}
                placeholder="Enter name"
            />
            <Spacer />
            { recording
                ? <Button
                    title="Stop"
                    onPress={stopRecording}
                 />
                : <Button
                    onPress={startRecording}
                    title="Start Recording"
                 />
            }

        </>
    )
}

export default TrackForm